# IHLFG

I hate LFG!

Obviously nobody's going to be reading this yet, so I'm going to utilize the space as storage for personal development notes.

[Server](https://github.com/Serrowxd/IHLFG_Server)

# Notes

Rather than pulling directly from the API when searching for the player information - search dynamically when updating the character profile, then save the information to a database.

Cuts down on load times & gives a local resource to pull from.

Upvote & Downvote on profiles + the ability to leave comments (when signed in and verified). Possibly rating based? If you're not within 200 points of the person you're commenting (or above) you will be blocked from rating the player.

Searching for a player will pull up a list of possible results based on what the database query returns. Each player route will be dynamically created based on `/player/:id` where player id is the `charactername-realm` -- this will use props that are rendered based on componentWillMount which performs a get request, the information passed to the get request will be dynamically input based on the route used `/player/:id` will return all the information from `id` and pass it to the component via state.

---

Disregarding what I said above, in terms of the player search, what if we were to simply attack it by dynamically creating the routes server-side, so when you navigate to the specified route, it'll automatically know which information to parse? Sure we'd have a single template that holds the information, but in reality we'll just be telling it hey when you navigate to this route, pull this information from the server and utilize this template.

In this sense all the logic would be handled in the server itself, rather than by the front-end code. We'd really just be rendering the information at that point as it came back from the server. **Do more research into this.**

# Small Notes

https://www.npmjs.com/package/query-string

https://tylermcginnis.com/react-router-query-strings/

https://www.howtographql.com/

# To-Do

[Trello](https://trello.com/b/qTFZ9bVa/ihlfg)

[Front-End Repo](https://github.com/Serrowxd/IHLFG)

[Back-End Repo](https://github.com/JaredRCooper/IHateLfgBackend)

# Documentation

#### **WIP**

**How To Use**

As of current the only routes that are working are `Patreon` which will link you to a structured search result. You can click on `Serrow` to pull up the profile.

Modals can be accessed by clicking Log-in or Sign-up.

_More Updates to come_
