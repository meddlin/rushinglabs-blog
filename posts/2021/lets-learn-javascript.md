---
date: "2021-11-21"
title: "Why create a new course to learn JavaScript?"
preview: |-
    I recently started creating a new series for others looking to learn JavaScript, and I'm teaching it as if it was someone's first programming language. Why? Because after 6 years with the language, I learned that I didn't really know JavaScript, and after 5 minutes with this idea...it looks like JavaScript is a special language that can be learned with just a browser and text editor.
---

I recently started creating a new series for others looking to learn JavaScript, and I'm teaching it as if it was someone's first programming language. Why? Because after 6 years with the language, I learned that I didn't really **know** JavaScript, and after 5 minutes with this idea...I'm asking myself, can JavaScript be learned with _just a browser and text editor?_

## How Did I Learn JavaScript

I briefly played with JavaScript back in college, but it wasn't the best experience. Nothing seemed defined, it was weirdly tossed around in a browser, and I was deep into the CS program learning more interesting things with C#.

It was 2014--I had just finished a major responsive site design project at work, I stumbled across Meteor.js. Then ES6 hit. My head was swirling in JavaScript; everything I wrote was a webapp. "JS fatigue" seemed to be what every developer was discussing.

Soon after I was diving headfirst into React, and pulling together some large projects. Honestly, it felt great. I was still growing my skills with C# on the back-end, and it seemed like I could really become a competent full-stack engineer! Then while integrating a UI library with React I came across memoization and higher-order components. I didn't know this language; I was just figuring stuff out.

I've since moved into an AppSec role, but I miss being elbow-deep in code every day...it's leading me to revisit some of these pieces.

## JavaScript's Quirk

Considering writing a video series for learning JavaScript [link to YT channel], I figured it would be good to target a more novice audience. JavaScript could easily be someone's first language with the state of web development and modern tooling. But how would they want to learn?

I've seen several JavaScript courses/tutorials go down this path starting with Node.js. To me, this unnecessarily muddies the waters. Node is fine, but why potentially confuse beginners with a server-side runtime, npm, and the weird history of JavaScript being created for the browser.

Not to mention, my first taste of JavaScript was while jQuery was still the one tool everyone used. And as we've generally moved away from using that library, I've seen JavaScript tutorials take on a different "flavor" of sorts; almost like they're missing some of the core pieces of what JavaScript is.

So...

Why not stick with "_just vanilla JavaScript_"? Y'know, K.I.S.S. method and all. Okay...what's required? 
- The browser, yes. 

But what about all of that ES6 ([and other](https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964)) fancy-ness? 
- It's pretty [well-supported in browsers](https://caniuse.com/?search=es6) these days.

Okay...so, no extra needed; good. That leaves...an HTML + JS file?
- Yes. And a text editor.
- _which there are plenty_...just like browsers

Is it possible to teach and learn JavaScript's core functionality using only a browser and text editor? For now, it seems so.

## Still, why this first?

In a word, fundamentals.

Node.js
- Knowing JavaScript before getting into Node's special nuances is invaluable.

React (and Angular, Vue, etc.)
- Each of these frameworks is (in some part) built on top of JavaScript. 
    - Get into React's deeper features, and you'll even find entire design patterns falling out which require good knowledge of JavaScript to fully grasp.
- Svelte even has it on their landing page "compiles your code to...vanilla JS"

npm, Babel, transpilers, etc.
- The surrounding tools are further from JavaScript, more supporting. Yet, understanding their core concepts, thus why they're needed, requires knowing JavaScript!


## So, what?

In case it isn't obvious, my teaching style for this stuff is at least partly inspired by Zed Shaw's material. I won't say my series is "the hard way", but I do believe one of a programmer's best tools is, asking "Why?". So, I wanted the ultimate answer, for myself, on this _knowing_ JavaScript problem. And why not help others and make a few videos [YT link] along the way :)

Further, I work in AppSec now. It's this uncanny valley between Software Development and Security departments. Security is enamored with team members with programming experience, while Development is repulsed by additional work from Security, _**but**_ everyone knows they need to be following a Secure-SDLC.

So, this is my attempt to answer some questions, and gain a deeper knowledge of what may soon be the most important language for AppSec.



## References

- ES6 Spec, Can I Use?: https://caniuse.com/?search=es6
- Medium article, ES6/ES7 Features: https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964