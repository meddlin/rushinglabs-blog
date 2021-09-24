---
date: "2021-09-22"
title: "Built In a Weekend"
---

Have you ever had one of those "simple" ideas you wanted to build? Something not too crazy, but just a fun idea...or maybe something you just hadn't found _quite_ the solution you're looking for? Then suddenly the perfect weekend for it comes up and you decide to pounce. Let's do this. I'm starting with nothing, and not quitting until there's something to show.

I finally did that.

The project itself wasn't too exciting. I've been shopping around for a house lately, and I needed an amortization calculator. Nothing crazy. Plenty of them exist online, but I couldn't find one that fit the bill (no pun intended) the way I needed it to. And I've also been looking for an excuse to experiment with the AppSec tools available for hobby projects.

## What to build?

An amortization calculator that incorporates:

- sale price, down payment _leading to_ principal + interest
- home insurance, property tax, and mortgage insurance
- mortgage insurance rolloff term/date
- extra principal payments

Finally, I cut myself some slack around styling the application. Going into this I knew the end result was going to look ugly and plain: 1) because I'm not good with CSS, and 2) the hard deadline.

_Ultimately, the main goal here is be able to plug in some numbers and get a full amortization table back._

## Tools + Tech Stack

Development
- .NET Core
- React
- Docker

Platform
- GitHub
- Heroku

Extra Tools
- CodeQL
- GitHub Dependabot

## Lessons Learned

An aspect of all this I didn't expect to find was some hidden lessons. Stepping back after this is done though, it makes sense--placing yourself under pressure (even manufactured) will highlight efficiencies (to save time) while causing deficiencies to fall flat.

### "Done is better than perfect"

I've heard this quoted by many people, but this little weekend experiment personified it for me.

I can't count how many times I had to remind myself, "No, this isn't perfect; of course you want to do it better; but rough it in and get it finished." The hard deadline of _midnight Sunday_, ultimately helped me stay focused and prioritize what I was working on in the moment. 

### Expose Weaknesses

Working through this showed me where I was weakest in producing a full-stack solution. (Definitions of "full-stack" and the absence of data retention notwithstanding) ...and that was around deployment, specifically containerizing the front-end and backend portions with Docker and successfully deploying to Heroku.

For me, "weakness" was synonymous with which aspects took the most time to implement. If you're walking through this exercise, also watch out for what you're able to document, or explain, the least. 

Second to this, I would say reflect on what features/aspect you're willing to cut from the beginning. For me, this was styling and UI. I knew it was going to look ugly. Small caveat here though, sometimes we cut things because we don't have time--even if we know exactly how to implement them.

## Now What?

The main goal I had set was accomplished. The app was built, and the basic functionality is there.