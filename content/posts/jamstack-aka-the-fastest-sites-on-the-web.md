+++
date = "2018-04-04T05:32:09+00:00"
draft = true
title = "What is JAMstack?"

+++
Officially, JAMstack is:

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

But to me JAMstack represents the growing pushback from developers on the ridiculous size and complexity of a modern web page. We have text articles loading 2 megabytes of tracking and ads and profiling on their user rather than loading in the blink of an eye with the information they actually wanted. Its about respecting your user's time and attention and mobile data since they're the ones paying for those heavy sites and constantly streaming ads.

There are basically two kinds of websites: Dynamic websites or "web applications" are like facebook, twitter, modern email clients. Since they refresh and update themselves without page refreshes and allow you to post and make changes to the data you're viewing. These kinds of sites are complex to program and need a server to constantly run these operations so they are expensive to host.

Static sites are more like those ancient business sites from 1990. They don't change their data at all. But they are can be hosted for basically free and are extremely quick to load and scale for many users.

JAMstack gives you the best of both worlds by using Javascript and APIs to have dynamic function on a static markdown site. Using serverless/cloud architecture and javascript means everything is run client side in their browser or on third party servers that you only have to pay the actual running time for.