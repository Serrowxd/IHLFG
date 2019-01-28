# IHLFG

I hate LFG!

# Notes

Rather than pulling directly from the API when searching for the player information - search dynamically when updating the character profile, then save the information to a database.

Cuts down on load times & gives a local resource to pull from.

Upvote & Downvote on profiles + the ability to leave comments (when signed in and verified). Possibly rating based? If you're not within 200 points of the person you're commenting (or above) you will be blocked from rating the player.

Searching for a player will pull up a list of possible results based on what the database query returns. Each player route will be dynamically created based on `/player/:id` where player id is the `charactername-realm` -- this will use props that are rendered based on componentWillMount which performs a get request, the information passed to the get request will be dynamically input based on the route used `/player/:id` will return all the information from `id` and pass it to the component via state.

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
