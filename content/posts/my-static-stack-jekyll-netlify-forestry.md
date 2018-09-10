+++
date = "2018-08-19T16:18:01+00:00"
title = "JAMstack is <3"

+++
Officially, JAMstack is:

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

But _really_, JAMstack represents the growing pushback from developers about ridiculous page bloat, javascript "front-end-of-the-week" fatigue, and overly complex web frameworks. We have text articles slowly loading multiple megabytes of [tracking](https://fieldguide.gizmodo.com/all-the-ways-facebook-tracks-you-that-you-might-not-kno-1795604150)/[ads](https://digiday.com/media/is-this-the-worst-page-on-the-internet/)/[cryptomining](https://arstechnica.com/information-technology/2017/11/sneakier-more-persistent-drive-by-cryptomining-comes-to-a-browser-near-you/) rather than loading instantly with the information the user actually wanted. We have two major and incompatible versions of Angular in production. Front-ends are becoming replications of the entire backend which creates twice as many places for errors and slows down development considerably. Working on the web can be faster and easier if you abstract out the most common features of web pages as APIs rather than reinventing the wheel every time with the language du jour.

Making your sites as light as possible helps you use less of your clients bandwidth and makes it easier and cheaper to scale.

JAMstack gives you the best of both worlds by using Javascript and APIs to have dynamic function on a static markdown site.

The best part about JAMstack is that it isnt some new framework that you have to learn. It is more about using your current skills in JS, HTML, and CSS to create something flexible, powerful, and blazingly fast. At its core the JAMstack website reads as a gathering of tools and best practices for unleashing the power of static sites. Using Javascript and API's can perform the dynamic side while the actual pages are statically generated and delivered via CDN for blazing fast TTL.

This site was built using JAMstack principles. Here's how I did it. I used Hugo, Github, Forestry.io, Netlify, and GoDaddy(I have since moved to Namecheap).

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

Now I can log into Forestry from anywhere and update my posts, add pictures, and change my pages around without having to work in the command line. Like Wordpress except its basically free to host, way easier to scale, **more secure** because its static and doesn't have a juicy login to attack.

What this means for me is that the site is light, fast, secure, and cheap since I don't need to pay for a hosting plan every month.

JAMstack is not suitable for every single website or project(I still build most of my applications in Ruby and Rails) however most business and informational websites would gain significant benefits from switching from something like Wordpress to a custom JAMstack build.