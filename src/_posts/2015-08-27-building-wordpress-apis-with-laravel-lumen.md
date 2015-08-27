---
layout: post
title: Building WordPress APIs with Laravel/Lumen
image: laravel-wp.jpg
excerpt: "You need to build an API for your WordPress database? I explain how you can do that using Laravel/Lumen."
---

{% image default laravel-wp.jpg %}

Building Wordpress REST APIs is relatively easy thanks to [this plugin](https://github.com/WP-API/WP-API){:target="_blank"} and other packages out there. But sometimes you need just a little more control than existing solutions give you.

### Introduction

There was a nice challenge in my latest client project: a WordPress site with multiple Custom Post Types and heavy usage of [Advanced Custom Fields](http://www.advancedcustomfields.com/){:target="_blank"} should now provide an interface for a mobile application.

WordPress itself and the REST API needed to be on the same host. So I thought it would be appropriate to use the database as the actual interface between API and WP. With this in mind I came across a package called [Corcel](https://github.com/jgrossi/corcel){:target="_blank"}. This package is based on Eloquent itself and offers a Laravel-Style API to fetch data from a WordPress database. So I decided to setup a clean [Lumen](http://lumen.laravel.com/){:target="_blank"} install and try it out.

Corcel feels familiar, works great and as expected. It's in heavy development but seems stable enough for production use. However, when I returned the output as a JSON view for the first time I got something like this:

{% highlight json %}
[
  {
    "ID": 1486,
    "post_author": 2,
    "post_date": "2015-07-29 20:05:12",
    "post_date_gmt": "2015-07-29 18:05:12",
    "post_content": "Lorem Ipsum dolor sit amet.",
    "post_title": "First Article",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "open",
    "ping_status": "open",
    "post_password": "",
    "post_name": "first-article",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2015-07-29 20:05:12",
    "post_modified_gmt": "2015-07-29 18:05:12",
    "post_content_filtered": "",
    "post_parent": 0,
    "guid": "http://domain.com/?p=1486",
    "menu_order": 0,
    "post_type": "post",
    "post_mime_type": "",
    "comment_count": 0,
    "meta":
    [
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "_thumbnail_id",
        "meta_value": "1487"
      }
    ]
  }
]
{% endhighlight %}

Uhhh, this is ugly. WordPress and the way it stores and handles data is not what I'm used to in the Laravel universe. So I created a small package called [mikado](http://github.com/kriskbx/mikado){:target="_blank"} to filter and remap the Corcel data to a format I like (and hopefully the actual API consumers too).

### Getting started

Pull in the package with composer by adding the following to your `composer.json` and run `composer install` afterwards:

{% highlight json %}
"require": {
    "kriskbx/mikado": "0.1.*"
},
{% endhighlight %}

The package was tested with Corcel only, but it should be compatible with other Eloquent models.

If you want to use actual WordPress data, also pull in **Corcel**:

{% highlight json %}
"require": {
    "jgrossi/corcel": "dev-master"
},
{% endhighlight %}

### Fetch your data with Corcel

First, we need to connect to our WordPress database:

{% highlight php %}
<?php

$params = [
    'database'  => 'database_name',
    'username'  => 'user_name',
    'password'  => 'super_secret_password',
    'prefix'    => 'wp_',
    'driver'    => 'mysql',
    'host'      => 'localhost',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci'
];

Corcel\Database::connect($params);
{% endhighlight %}

I've got a multisite setup, so I had to put this into a `BaseController` to set the proper prefix by a routing parameter. You should probably put this into your `app.php`.

Time to fetch our first data, shall we?

{% highlight php %}
return Post::published()->get();
{% endhighlight %}

Take a look at the [Corcel documentation](https://github.com/jgrossi/corcel#usage){:target="_blank"} for the whole public API. There are some useful examples for Posts, Pages, Custom Post Types, Taxonomies, Meta, Attachments and more.

### Introducing: mikado

Now we reached the point we were before: this ugly WordPress-style data. Let's configure mikado and make it nice.

If you're using Laravel/Lumen you can use mikados ServiceProvider that automagically creates everything for you.

#### Laravel

Edit your `config/app.php` and add the following:

{% highlight php %}
'providers' => [
    // Other Service Providers

    kriskbx\mikado\Providers\MikadoServiceProvider::class,
],
{% endhighlight %}

... and this:

{% highlight php %}
'aliases' => [
    // Other Facades

   'Mikado' => kriskbx\mikado\Facades\Mikado::class,
],
{% endhighlight %}

Publish the example config now by running:

{% highlight bash %}
php artisan vendor:publish
{% endhighlight %}

#### Lumen

Edit your `bootstrap/app.php` and add the following to the 'Register Service Provider' section:

{% highlight php %}
$app->register(kriskbx\mikado\Providers\MikadoServiceProvider::class);
{% endhighlight %}

.. and this to the 'Register Container Bindings' section:

{% highlight bash %}
class_alias(kriskbx\mikado\Facades\Mikado::class, 'Mikado');
{% endhighlight %}

Copy the contents of `vendor/kriskbx/mikado/config` to the `config` folder in your project root.

#### mikado <3 Corcel

To add mikados functionality to Corcel we should extend it:

{% highlight php %}
<?php

namespace Acme;

class WordPressPost extends \Post {
      
      /**
       * Get and format the data.
       *
       * @return array
       */
      public function scopeGetAndFormat($query) {
            $data = $query->get();            
            return Mikado::get('wordpresspost')->format($data);         
      }
      
}
{% endhighlight %}

To get this example working, we need to create our very first configuration file. Just rename the just published `config/mikado/model.php` to `wordpresspost.php`. The filename must match the identifier we pass to the `Mikado::get()` method.

Open the configuration file in your editor:

{% highlight php %}
<?php

return [
    'MetaFormatter' => [

    ],

    'RemapFormatter' => [

    ],

    'FilterFormatter' => [

    ],
];
{% endhighlight %}

We got a simple array for every Formatter that comes with mikado. Just paste in your configuration and you're done.

You can run the formatting now by simply calling the above query scope:

{% highlight php %}
return WordPressPost::published()->getAndFormat();
{% endhighlight %}

Pretty straightforward, hu? Let's take a look at the array-structure the Formatters except:

### MetaFormatter

WordPress meta looks like this:

{% highlight json %}
{ 
  # Rest of the Post object
  
  "meta":
    [
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "_thumbnail_id",
        "meta_value": "1487"
      }
    ]
}
{% endhighlight %}

The **MetaFormatter** takes an array like this: 

{% highlight php %}
<?php

$metaParams = [
   '_thumbnail_id' => 'thumbnail_id'
];   
{% endhighlight %}

and creates this:

{% highlight json %}
{
  # Rest of the Post object
  
  "thumbnail_id": 1487
}
{% endhighlight %}

The keys in the given array will be compared with `meta_key`. If there's a match, a new property with the name of the given value will be created. The value of the new property will be set to `meta_value`. The whole `meta` will be deleted after the process.

You can also provide **regular expressions** as keys. This ensures that even the ACF Repeater Field works:

{% highlight php %}
<?php

$metaParams = [
   '/^acf_field_repeater_([0-9]*)_acf_field_input$/i' => 'repeater.$1'
];   
{% endhighlight %}

WordPress data:

{% highlight json %}
{ 
  # Rest of the Post object
  
  "meta":
    [
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "acf_field_repeater_0_acf_field_input",
        "meta_value": "test-value"
      },
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "acf_field_repeater_1_acf_field_input",
        "meta_value": "test-value-2"
      }
    ]
}
{% endhighlight %}

Result:

{% highlight json %}
{
  # Rest of the Post object
  
  "repeater":
     [
       "test-value",
       "test-value-2"
     ]
}
{% endhighlight %}

I'm using a 'dot' syntax to specify the array structure within a string. If you're using Laravel this should be familiar.

### RemapFormatter

The RemapFormatter remaps or better renames and unsets properties:

{% highlight php %}
<?php

$remapParams = [
   'ID' => 'id,
   'post_author' => 'author_id',
   'post_date' => 'published_at',
   'post_date_gmt' => null, // null or false will unset properties
   'post_content' => 'body',
   'post_title' => 'title'
];

$formatter->add(new RemapFormatter($remapParams));
{% endhighlight %}

WordPress data:

{% highlight json %}
{
    "ID": 1486,
    "post_author": 2,
    "post_date": "2015-07-29 20:05:12",
    "post_date_gmt": "2015-07-29 18:05:12",
    "post_content": "Lorem Ipsum dolor sit amet.",
    "post_title": "First Article"
}
{% endhighlight %}

Result:

{% highlight json %}
{
    "id": 1486,
    "author_id": 2,
    "published_at": "2015-07-29 20:05:12",
    "body": "Lorem Ipsum dolor sit amet.",
    "title": "First Article"
}
{% endhighlight %}

This looks a lot cleaner. Nice! 

The **RemapFormatter** also uses the 'dot' syntax and handles regular expressions as well:

{% highlight php %}
<?php

$remapParams = [
   '/^meta.([0-9]*).meta_key$/' => 'newmeta.$1.key',
   '/^meta.([0-9]*).meta_value$/' => 'newmeta.$1.value',
   'meta' => null
];
{% endhighlight %}

Example input:

{% highlight json %}
{ 
  # Rest of the Post object
  
  "meta":
    [
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "acf_field_input",
        "meta_value": "test-value"
      },
      {
        "meta_id": 3092,
        "post_id": 1486,
        "meta_key": "acf_field_input_2",
        "meta_value": "test-value-2"
      }
    ]
}
{% endhighlight %}

Result:

{% highlight json %}
{ 
  # Rest of the Post object
  
  "newmeta":
    [
      {
        "key": "acf_field_input",
        "value": "test-value"
      },
      {
        "key": "acf_field_input_2",
        "value": "test-value-2"
      }
    ]
}
{% endhighlight %}

### FilterFormatter

Let's filter some properties, shall we:

{% highlight php %}
<?php

$filterParams = [
   'post_title',
   'post_content'
];

$formatter->add(new FilterFormatter($filterParams));
{% endhighlight %}

Guess, what it does. You're right: it filters the whole data and just returns the specified properties:

{% highlight json %}
{
  "post_content": "Lorem Ipsum dolor sit amet.",
  "post_title": "First Article"
}
{% endhighlight %}

### Not only for Eloquent

The package was designed to work with Eloquent. But you can also use it with any other data. It works with all arrays and objects, at least phpspec says that.

This example should get you started:

{% highlight php %}
<?php

use kriskbx\mikado\Formatter\FilterFormatter;
use kriskbx\mikado\Formatter\MetaFormatter;
use kriskbx\mikado\Manager;

$manager = new Manager();

$metaParams = [
    'old' => 'new'
];

$filterParams = [
    'new'
];

$manager->add(new MetaFormatter($metaParams));
$manager->add(new FilterFormatter($filterParams));

$manager->format($yourData);
{% endhighlight %}

Create a new Manager instance, add some Formatters to it und finally run the format method and provide your data.

Note: *mikado can't figure out if your given data is an array of objects or a single object. If you're passing an array of objects or any other data to `Manager->format($data, true)` make sure to set the second argument to true.*

### Limitations & issues

There's a lot of looping going on in this package. You should use caching to keep your Server responsive and healthy. After all performance isn't that bad. I optimized pretty everything when I wrote the tests.

### Roundup

I hope you had some fun reading this article or using the package. At least I had fun writing the article and creating the package.

If you want to help me keep this thing stable or add more functionality, [head over to GitHub](http://github.com/kriskbx/mikado){:target="_blank"}. I'm looking forward to some pull-requests.