---
layout: post
title: Time Tracking with Git
image: time.jpg
excerpt: "Track your time automagically with Glass and store it in your Git repository for later usage with an issue tracker of your choice."
---

{% image default time.jpg %}

There are some things that all freelancers need to do but in the end don't want to do: measuring everything money related, writing invoices and quotes, answering mails, all this nasty tax and authorities related paperwork, backing things up, organizing your work and clients, tracking your time and many more. You want to keep focussed on the project, build cool things and not be distracted by all of this.

Thankfully we live in a digital world that offers an app for everything. Using tools keeps you focussed on the things you build instead of wasting your time with stuff that can be automated, right? Today I want to talk about time tracking and how I do it. This article is part of a series how I organize and do things in my daily work life.

### Tools, tools, tools

I'm working on a Mac, so I tried most of the time tracking software available in the App Store. There are great ones, there are good ones and there are bad ones. But then I quickly realized that all the data is stored on my machine. That's great in the first place or if you think about privacy but it's really bad if you want to avoid unnecessary work.

I always offer full transparency to my clients: they should see how much time I spent on what task, so we can discuss everything and make the right decisions at the right time. This was a real lifesaver in the past, so I highly recommend to do this. Most of the tools I used made me spent at least 5 minutes on exporting and sending the data to my clients. Another minute for creating and naming the task I'm currently working on and voila: at the end of the day I wasted another 15 minutes.

### Committing time

Then an idea popped up in my head: I'm already creating and naming tasks with my commit messages — and I write fairly detailed commit messages. Much more detailed than any task within a time tracking app would ever be. So I started to track my time with a simple stopwatch and appended it to my commit messages. 

{% highlight bash %}
git commit -m "don't waste time on tracking it [1h50m0s]"
{% endhighlight %}

### Issue trackers are your friend

Most modern issue trackers are already shipped with time tracking built in. Redmine is, Codebase is, Jira has a nice plugin on the marketplace. They can read time from your commits. Redmine can even built invoices out of the stored time. You can mention tickets within your commits, so spent time gets automatically assigned to a ticket/task.

Your clients can see within every ticket how much time you spent on this specific task. This is great because a ticket is often the place where discussions start: 

> Should we extend this feature because the implementation was done so quickly? Should we drop another feature to get more time for this one?

They have direct access to the data. You don't have to export and send things like this by hand anymore. This is great for teams too.

### Automate the stopwatch

Throw away your stopwatch. We can automate the last bit of this. Install [Glass](https://github.com/timeglass/glass){:target="_blank"}, cd into your repository and run this:

{% highlight bash %}
glass init
{% endhighlight %}

That's it. Glass will keep track of your time by monitoring file system changes and stops after 5 minutes inactivity. You can start and stop the timer manually: `glass start` and `glass pause`. Take a look at the [docs](https://github.com/timeglass/glass/tree/master/docs){:target="_blank"} on how to use Glass and how to measure things.

That's pretty cool but here's the best part: it automagically appends the measured time to your commits. So, you just have to:

{% highlight bash %}
git commit -m "don't waste time on tracking it"
{% endhighlight %}

... and Glass will:

{% highlight bash %}
glass: 19:26:21 Reading input from Stdin...
glass: 19:26:21 Persisting 10m0s to version control...
glass: 19:26:21 Done!
glass: 19:26:21 Resetting timer to 0s...
glass: 19:26:21 Timer is reset!
[master e129e40] don't waste time on tracking it [10m0s]
 1 file changed, 0 insertions(+), 0 deletions(-)
{% endhighlight %}

### Epilogue

Using issue trackers with time tracking functionality will change the way you communicate with your clients. 

Committing your time with glass and measuring it within your issue tracker will save you at least 10-15 minutes on an average work day which you could spent on other things.

**Awesome**, more time to procrastinate. \*switched-to-9gag-tab\*

<small>*Photo by [Alexandre Duret-Lutz
](https://www.flickr.com/photos/gadl){:target="_blank"} / Flickr. CC BY-SA 2.0*</small>