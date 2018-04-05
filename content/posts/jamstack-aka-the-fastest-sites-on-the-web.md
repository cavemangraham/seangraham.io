+++
date = "2018-04-04T05:32:09Z"
draft = true
title = "Why You Should Care About JAMstack"

+++
Officially, JAMstack is:

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

But JAMstack represents the growing pushback from developers about the ridiculous size and complexity of modern web pages. We have text articles slowly loading multiple megabytes of [tracking](https://fieldguide.gizmodo.com/all-the-ways-facebook-tracks-you-that-you-might-not-kno-1795604150)/[ads](https://digiday.com/media/is-this-the-worst-page-on-the-internet/)/[cryptomining](https://arstechnica.com/information-technology/2017/11/sneakier-more-persistent-drive-by-cryptomining-comes-to-a-browser-near-you/) rather than loading instantly with the information the user actually wanted. Its about respecting your user's time and attention and bandwidth since it is a finite resource that the customer pays for just to interact with your service. Due to the proliferation of smart phones much of modern web traffic is from mobile users on expensive cellular data.

Making your sites as light as possible is therefore a moral decision about respecting your users.

JAMstack gives you the best of both worlds by using Javascript and APIs to have dynamic function on a static markdown site.

JAMstack isn't really a framework so much as it is a gathering of tools and best practices for very powerful static sites. Using Javascript and API's can perform the dynamic side while the actual pages are statically generated and delivered via CDN for blazing fast TTL. 