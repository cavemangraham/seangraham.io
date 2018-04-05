+++
date = "2018-04-04T05:32:09Z"
draft = true
title = "Why You Should Care About JAMstack"

+++
Officially, JAMstack is:

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

![](/uploads/uploads/Screen Shot 2018-04-04 at 12.35.53 PM.png)

But _really_, JAMstack represents the growing pushback from developers about ridiculous page bloat, javascript "framework of the week" fatigue, and overly complex web frameworks. We have text articles slowly loading multiple megabytes of [tracking](https://fieldguide.gizmodo.com/all-the-ways-facebook-tracks-you-that-you-might-not-kno-1795604150)/[ads](https://digiday.com/media/is-this-the-worst-page-on-the-internet/)/[cryptomining](https://arstechnica.com/information-technology/2017/11/sneakier-more-persistent-drive-by-cryptomining-comes-to-a-browser-near-you/) rather than loading instantly with the information the user actually wanted. We have two different major versions of Angular in production. Front-ends are becoming replications of the entire backend which slows down development. Working on the web can be faster and easier if you abstract out the most common features of web pages as APIs rather than reinventing the wheel every time with the language du jour.

It is about respecting your user's time, attention and bandwidth since they are all finite resources that the customer pays just to interact with your service. Due to the proliferation of smart phones much of modern web traffic is from mobile users on expensive cellular data.

Making your sites as light as possible is therefore a moral decision about respecting your users.

JAMstack gives you the best of both worlds by using Javascript and APIs to have dynamic function on a static markdown site.

The best part about JAMstack is that it isnt some new framework that you have to learn. It is more about using your current skills in JS, HTML, and CSS to create something flexible, powerful, and blazingly fast. At its core the JAMstack website reads as a gathering of tools and best practices for unleashing the power of static sites. Using Javascript and API's can perform the dynamic side while the actual pages are statically generated and delivered via CDN for blazing fast TTL. 