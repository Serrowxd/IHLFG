# IHLFG

I hate LFG!

# Notes

Rather than pulling directly from the API when searching for the player information - search dynamically when updating the character profile, then save the information to a database.

Cuts down on load times & gives a local resource to pull from.

# To-Do

- Set-up Firebase
- Attach real-time
- Create NodeJS back-end to pull from API to Database
- Search Functionality
- Routes & Props
  - Children should recieve props dynamically but should still be able to render information by default
  - 404 Page & Player Missing
- Redo Modals & Sign-up/Log-in process
  - Log-in should be username or email
  - Sign-up should include an email and have the ability to authenticate the user
- oAuth Login or Firebase
- Material UI Implement
- Forms should take information properly - possibly Formilk?
- Refactor CSS & Styled Comps
  - A few styles are in both the LESS and Styles.js files, should only exist in one or the other.
  - Material-UI should be implemented
  - Create a constant color scheme and destruct to be applied to all colors.
  - Breakpoints should be mixins & handled with LESS
- Upvote & Downvote on profiles + the ability to leave comments (when signed in and verified)
  - Possibly rating based? If you're not within 200 points of the person you're commenting (or above) you will be unable to comment/vote.
- Move Navigation & Modals to Global Scope
