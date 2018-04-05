+++
date = "2018-04-04T05:32:09Z"
draft = true
title = "Why You Should Care About JAMstack"

+++
Officially, JAMstack is:

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

![](/uploads/uploads/Screen Shot 2018-04-04 at 12.35.53 PM.png)

But _really_, JAMstack represents the growing pushback from developers about ridiculous page bloat, javascript "front-end-of-the-week" fatigue, and overly complex web frameworks. We have text articles slowly loading multiple megabytes of [tracking](https://fieldguide.gizmodo.com/all-the-ways-facebook-tracks-you-that-you-might-not-kno-1795604150)/[ads](https://digiday.com/media/is-this-the-worst-page-on-the-internet/)/[cryptomining](https://arstechnica.com/information-technology/2017/11/sneakier-more-persistent-drive-by-cryptomining-comes-to-a-browser-near-you/) rather than loading instantly with the information the user actually wanted. We have two major and incompatible versions of Angular in production. Front-ends are becoming replications of the entire backend which creates twice as many places for errors and slows down development considerably. Working on the web can be faster and easier if you abstract out the most common features of web pages as APIs rather than reinventing the wheel every time with the language du jour.

Making your sites as light as possible helps you use less of your clients bandwidth and makes it easier and massively cheaper to scale.

JAMstack gives you the best of both worlds by using Javascript and APIs to have dynamic function on a static markdown site.

The best part about JAMstack is that it isnt some new framework that you have to learn. It is more about using your current skills in JS, HTML, and CSS to create something flexible, powerful, and blazingly fast. At its core the JAMstack website reads as a gathering of tools and best practices for unleashing the power of static sites. Using Javascript and API's can perform the dynamic side while the actual pages are statically generated and delivered via CDN for blazing fast TTL. 

This site was built using JAMstack principles. Here's how I did it.

Hugo, Github.com, Forestry.io, Netlify.com, GoDaddy.com

install hugo

create site

git repo init

install theme

git push

connect netlify

connect forestry.io

publish new post

setup custom domain in netlify

point godaddy dns to netlify servers

after netlify dns: one click ssl

force https

Now I can log into Forestry whenever from anywhere and update my posts, add pictures, change my pages around without having to work in the commandline. Like wordpress except its basically free to host, way easier to scale, **more secure** because its static and doesnt have a juicy login to attack.