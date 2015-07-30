---
layout: post
title: "Fixed Aspect-Ratio mit CSS (GER)"
image: aspect-ratio.jpg
excerpt: "In diesem Tutorial möchte ich euch zeigen, wie ihr den Aspect-Ratio - zu Deutsch: das Seitenverhältnis - bei Skalierung eines Div-Containers beibehalten könnt."
---

{% image default aspect-ratio.jpg %}

Wer sich mit Responsive Webdesign beschäftigt, stolpert früher oder später über das ein oder andere Problem mit statischen Elementen. 
Ein Beispiel dafür wären Flash-Container, die beim Verkleinern des Browsers einfach nicht richtig mit der Webseite skalieren.

Die Idee hinter Responsive Webdesign allgemein ist eine Optimierung der Webseite für alle Endgeräte: also sowohl Computer 
als auch Tablets und Smartphones. Man arbeitet hauptsächlich mit elastischen Layouts, die sich mit kleiner werdender 
Browsergröße skalieren bzw. verschieben.

In diesem Tutorial möchte ich euch zeigen, wie ihr den Aspect-Ratio - zu Deutsch: das Seitenverhältnis - bei 
Skalierung eines Div-Containers beibehalten könnt. Wir benutzen dafür reines CSS; ohne Layout-Bild, das bei 
konventionellen Methoden häufig eingesetzt wird.

### HTML-Markup

{% highlight html %}
<div class="ar_container">
    <div class="ar_dummy"></div>
    <div class="ar_content">

        <!-- Inhalt -->

    </div>
</div>
{% endhighlight %}
			
### CSS
{% highlight css %}
.ar_container {
    display: inline-block;
    position: relative;
    width: 100%;
}

.ar_dummy {
    margin-top: 56.25%;
}

.ar_content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
{% endhighlight %}

### How it works
Mit `display: inline-block;` machen wir aus dem übergeordneten Container `.ar_container` ein Inline-Element; 
allerdings mit den Optionen eines Block-Elements wie _width_, _height_, _margin_ oder _padding_.
`position: relative;` sorgt nun dafür, dass wir die Kindelemente absolut positionieren können und sie sich auf dieses 
Elternelement und nicht auf den _body_ beziehen.
Die Breite kann man wählen, wie man will - da wir den Inhalt allerdings mit dem Browser-Fenster skalieren wollen, geben 
wir diesem Element eine relative Breite in Prozent.
In der Demo findet man zusätzlich einen "Wrapper" um das obige Markup. Dieser Wrapper besitzt eine feste Pixelangabe für 
die Breite `max-width:700px`, so dass unser Container erst skaliert wird, wenn die Breite des Browser-Fensters 700 Pixel 
unterschreitet.

Jetzt kommt der Moment, wo die Magie stattfindet: `.ar_dummy` legt unser Seitenverhältnis fest. In diesem 
Fall ist das Seitenverhältnis 16:9 beziehungsweise 1,78:1 oder 0,5625:1. Wir teilen die Höhe unseres Inhalts-Elements durch 
die Breite, rechnen diesen Quotienten als Prozentzahl um (*100) und er wandert in _margin-top_.

_<strong>ar_content</strong>_ wird schließlich absolut positioniert und passt sich durch die genullten Positionsangaben an die Größe des Eltern-Elements an.
Um jetzt noch zu erreichen, dass unser Inhalt mit skaliert geben wir ihm - hier ein YouTube Video - eine Breite und Höhe von 100%:

{% highlight html %}
<iframe width="100%" height="100%" src="http://www.youtube.com/embed/8EOMYzFNTZc" frameborder="0" allowfullscreen></iframe>
{% endhighlight %}

### Fazit
Diese Technik eignet sich hervorragend um sonst statische Elemente - wie zum Beispiel einen Flash-Container oder ein 
HTML5-Canvas - innerhalb eines elastischen Layouts zu verwenden. Für Fragen, Anregungen, Kritik bitte die Kommentarfunktion 
nutzen.