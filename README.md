# About Planit 
Planit is a full-stack web app that helps users create compact travel plans. 
Users can search activities, sight-seeing locations, restaurants and more for their travel destinations using the Google Places API. Users can add activities in favourites or into the day plans they created. They can archive plans and view past plan details of the places they have traveled to.

## Screenshots

Users can sign in or sign up from the register or login page. This takes them to the plan page where they can create a new plan and see their active plans!

!["Register and login page to plan page"](https://github.com/jesssubin/planit/blob/master/docs/Planit-register-login.gif?raw=true)

After creating a plan, users are redirected to the search page to start adding activities to their plans. 
Not ready to commit? Users can also add activities to their favourites where they can decide later if they want to add the activity to their plan!

!["Search activities on the explore and add to plan"](https://github.com/jesssubin/planit/blob/master/docs/planit-search-activities.gif?raw=true)

From favourites, users can add activities to their plans. Plans can be opened to display details and edit or delete activities. 
Plans can also be archived once a user is done with them.

!["Save from favourites and view plan details"](https://github.com/jesssubin/planit/blob/master/docs/planit-save-from-favourite.gif?raw=true)

## Tech Stacks 
- HTML/CSS
- React.js 
- Node.js
- Express.js
- PostgreSQL
- Google API 

### planit-api 

Provides the backend of this app. 
Follow the link: [https://github.com/jesssubin/planit-api]

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### File tree system 

Just FYI to follow through: 

- Plan List: Shows all your plans / Show create new plan form 
  - Plan Result: shows the plan dates 
    - Plan Dates: Shows each date
  - Plan Details: Show Plan Summary 
    - Plan Sumary: Maps Plan Timeslot
      - Plan Timeslots: Shows each timeslots 
