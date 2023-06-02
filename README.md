# V2Cruciverbalism

This is a crossword app based loosely on the NYT online puzzle that uses an archive of historical NYT game data.

It will be built with React, using Vite and Storybook for component development.

It is intended to be a single page app, a basic game board that displays the puzzle and clues, with a modal window to collect user and game data and initiate the game.

Initial build will be single player, adding functionality for profile creation, record keeping, and multiplayer modes (turn based, competetive, cooperative?)

\*\* 5/4/23

Starting fresh from the ground up, see how it goes this time. I've got the basic structure together and have started to add components. Will try to get a little done on the cell component tonight but probably not much more than that.

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

\*\* 5/9/23

Refreshing my understanding of the 'server' and how that fits in. Feeling a bit better abt it than where I left off yesterday.

\*\* 5/10/23

Knocking the cobwebs out of the helper funcs in newGameManager

\*\* 5/11/23-5/12/23

Short evening sesh 5/11, didn't do a whole lot but reviewed helper funcs in newGameManager.

\*\* 5/12

I'd like to really tighten up my understanding of the Express server, newGameManager, and the process of bringing data in.

\*\* 5/26/23

Went in with intention to get some work done with components - Sketch out a framework and get some things taking form in Storybook. Ended up getting derailed onto Express and the server but it felt like a productive digression. I feel like I'm better grasping the way the whole OBJECT ORIENTED ecosystem works and I feel much better in my understanding of how the Express based routing works in the app. I feel I improved my understanding of - The distinction between a route definition (the 'whole' route, so to speak, including the request method, the path, and the handler func) and the route path (the actual path as it is written in the route definition) - The request and response objects and their use in the handler func - The distinction of serving static files
Overall feeling like things are clicking better but I'm apprehensive about tackling the grid and cells and it feels like a bit of intentional stalling. Need to make an intentional push to get into components and embrace the struggle.

\*\* 5/30/23

Moved some files around last session and seem to have broken Storybook. Should have been more mindful with changes/updates (branch). Will try to troubleshoot/salvage if possible but may need to start fresh.
Not as bad as I thought, all good. No progress tonight though.

\*\* 5/31/23

Feeling sluggish and unmotivated, not sure if it's the yips of butting up against React components or just general malaise.