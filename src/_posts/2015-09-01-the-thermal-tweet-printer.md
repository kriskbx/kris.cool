---
layout: post
title: The thermal Tweet printer 
image: thermal-tweet-printer.jpg
excerpt: "Automagically print tweets with a certain hashtag on a POS thermal printer using a Raspberry PI."
---

{% image default thermal-tweet-printer.jpg %}

A few months ago I bought a cheap POS thermal printer **[like this](http://amzn.to/1O371Yk)** from Amazon, plugged it into my Raspberry PI and started experimenting.

I have some experience with Ruby from my RPGMaker days back in 2004-2008, so I thought it would be nice to refresh my memory and write everything in Ruby.

I created a little script to search for Tweets that contain certain hashtags and print them including images with the thermal printer. It's actually very useful: Think of a conference, bar-camp or any other smaller event. Just place the thing on a table and watch people go crazy on Twitter with your hashtags.

Awesome!

{% image default tweet-printer-overview.jpg %}

> Everything you need: printer, paper, raspi, wifi/ethernet and power.

### Usage

Create a new instance at the bottom of the script, provide your Twitter API access data, as well as your hashtags and run the whole thing:

{% highlight ruby %}
twitter = POSTwitter.new( "comsumer_key", "consumer_secret", "access_token", "access_token_secret", ["hashtag", "hashtag2"] );
{% endhighlight %}

### Source

<script src="https://gist.github.com/kriskbx/bc6ab4ef938fe458e834.js"></script>