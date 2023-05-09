# V2Cruciverbalism

\*\* 5/4/23

Starting fresh from the ground up, see how it goes this time. Using ChatGPT pretty extensivley, hopefully
can be savvy enough about it's use that it can help and not hinder. I've got the basic structure together and have started to add components. Will try to get a little done on the cell component tonight but probably not much more than that.

\*\* 5/5/23

Considering my approach, and the benefits to doing things from the component level up. Previously on the toy projects, my instinct was to start from the outside and work in, mainly so I could easily visualize and add layers of complexity to avoid getting lost. I suppose that could still be a valid approach but need to look into how this is viewed in terms of best practices.

I'm integrating Storybook into the project and will try looking at it from a component-up standpoint. This also seems to be the direction that ChatGPT has steered it. Willing to give it a shot.

    - Getting through a couple of hiccups using Storybook, but I think I am getting close to being able to make some use of it. Had a little trouble getting the syntax right and making an SVG component work with inline styling (ChatGPT suggested this, found it suspect, kind of confirmed here). Pretty sure it can be made to work this way but the GPT syntax is screwy.

    - Pay attention to the syntax of attributes, had to spend some time here to get the component to display in Storybook UI

\*\* 5/7/23

Quick sesh, feeling pretty optimistic about Storybook. See how it goes. Added a couple small tweaks nothing big (played around w/ stroke color, styling & controls) would like to maybe see the cell functioning properly this week. Fingers crossed.

\*\* 5/8/23

Goal this evening is to get some data introduced and into the cell.

Going to stick with the way it was done in the last version, using fetch. ChatGPT suggested something that used React Context but it seemed bad (lot's of repetition). Going to try and implement it without looking at the old code, can get online references tho. Will need to use useEffect and fetch.

Leaning on old code a little more than had hoped but oh well. Remembering that this (data handling) was where the wheels kind of started to come off last time, take it slow and keep it together. Left off with puzzleMap copied over still need to get the other helper funcs.
