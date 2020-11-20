## ROUTES 

GET '/' -> (GET request for main explore page) 
GET '/login' (GET users to login page)
POST '/login' (POST request for user login)
GET '/register' (GET request for register page)
POST '/register' (POST request to register new user)
GET '/user/:id' (GET user profile page)
GET '/user/:id/favorite' (GET specific user's favorite)

GET '/user/:id/plan' (GET specific user's plan)
PUT '/user/:id/plan' (PUT update the user's plan)

GET '/user/:id/history' (GET specific user's history)

POST '/logout' (POST request for user logout and redirect to main page)

