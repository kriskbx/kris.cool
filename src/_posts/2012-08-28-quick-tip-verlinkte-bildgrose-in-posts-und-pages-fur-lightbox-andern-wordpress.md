---
layout: post
title: "WP: Bildgröße in Links für Lightbox ändern (GER)"
image: aspect-ratio.jpg
excerpt: "Verlinkte Bildgröße in Posts und Pages von WordPress für Lightbox mit preg_match ändern."
---

{% image default quicktip-wp.jpg %}

Folgende Situation: man benutzt Lightbox, Fancybox oder Ähnliches und bindet ein Bild in einen Artikel oder in eine Seite ein. Nun verlinkt dieses Thumbnail auf das original Bild, das unter Umständen sehr groß sein kann. Das will man natürlich nicht unbedingt wegen der entsprechenden Ladezeiten.

Da der Link bei Wordpress als Zeichenkette in der Datenbank gespeichert wird, hat man leider mit Filter-Hooks keinen Zugriff darauf. Die einzige Möglichkeit jetzt die Größe des verlinkten Bildes zu ändern heisst preg_match:

{% highlight php %}
<?php
//Gibt die Attachment-ID anhand eines Dateipfades zurück
function get_attachment_id_from_src ($link) {
       if(stristr($link, '.jpg') || stristr($link, '.png') || stristr($link, '.gif')) {
       global $wpdb;
       $link = preg_replace('/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $link);
       $links = explode("/", $link);
       $link_name = $links[count($links)-1]; 
       global $post;
       return $wpdb->get_var("SELECT ID FROM {$wpdb->posts} WHERE guid LIKE '%$link_name%' AND post_parent = '$post->ID'");
       }
 }
//Bildgröße ändern
function change_image_size_in_post( $content ) {
	//Wir suchen nach verlinkten Elementen
        $replace_content = $content;
	$search_pattern = '/<a\s[^>]*href=\"([^\"]*)\"[^>]*>(.*)<\/a>/siU';
	preg_match_all( $search_pattern, $content, $found_images );
	$image_num = count($found_images[1]);
	if ( $image_num > 0 )
	{
    	for ( $i=0; $i < $image_num ; $i++ )
    	{
        	//Wir untersuchen ob es zu diesem verlinkten Element einen Eintrag in der Attachment-DB gibt
                $attachment_id = get_attachment_id_from_src( $found_images[1][$i] );
        	if($attachment_id) {
                        //Wenn ja, dann ersetzen wir die URL durch die der verkleinerten Version. Hier: die Größe 'large'
        		$replace_image_src = wp_get_attachment_image_src( $attachment_id, 'large');
	    		$replace_content = str_ireplace($found_images[1][$i], $replace_image_src[0] , $replace_content);
	    		}
     	}
    }
    return $replace_content;
}
add_filter('the_content', 'change_image_size_in_post');
{% endhighlight %}

Wobei man natürlich `large` durch seine bevorzugte Bildgröße ändern kann. Das Ganze wandert anschließend in die _functions.php_. Quick and dirty, but it works - auch für Multisite-Installationen.
Da man in den weiten des Internets dazu keine passende Lösung findet, wollte ich das schnell mit euch teilen.

Danke an __<a href="http://www.eckl-medien.de/" target="_blank">Bernhard</a>__ für diese nette Herausforderung. ;)

Fragen, Anregungen und bessere RegEx-Pattern sind natürlich gerne willkommen.