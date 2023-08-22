# Food Shared - Backend

Food Shared is a web application that helps users easily find free food and other resources. It addresses the concern that although food banks and state-affiliated food assistance programs are crucial resources for millions experiencing food insecurity, these institutions present significant barriers for some individuals and families. The Food Shared directory highlights community-centered and mutual aid-driven resources with low barriers to access, including public pantries, community fridges, hot meals, and other accessible food assistance. Resources are accessible in ways that government and state-affiliated resources often are not or cannot be. 

The directory is local to Portland, Oregon, but it will be expanded to include more locations in the future and it will be updated regularly. 

## Dependencies 
This project uses the MERN techstack with RESTful API routes, React for frontend and Express.js for frontend.

Frontend dependencies include: 
 * node.js
 * nodemon server.js
 * Axios
 * cors
 * dovenv
 * JSON web token
 * Mongo DB atlas
 * Mongoose

## Installation
1. Git clone the repository
2. Install dependencies by running `npm install`
3. Create a MongoDB Atlas account on their site and install MongoDB Compass by running: 
    - Create a database called `Food Shared` and a collection called `resources`
5. Install MongoDB by running:
    -   ```brew tap mongodb/brew```
    -   ```brew install mongodb-community@6.0```
6. Install dependencies in the root directory:
    -   ```npm install```
7. Create a .env file on the root directory and add these variables:
    -   ```PORT = 5000```
    -   ```ATLAS_URI = mongodb+srv://YOURUSERNAME:yourpassword@cluster0.yourcluster.mongodb.net/FoodShared?retryWrites=true&w=majority```
    -   ```DB_NAME = "resources"```
    -   ```JWT_SECRET = "yourJSONToken"```
8. Run the development server with:
    -   ```npm run devStart```

You will need to install the frontend repository to fully test development. 
  
## Forthcoming and Future Enhancements... 
 - Expand beyond Portland
 - Complete the admin admin panel to moderate user submissions
 - Deploy frontend and backend
 - Add testing to ensure comprehensive code coverage
 - Implement filters for the directory/map
 - Improve zip code search and radius options
 - Registration for users who run or organize resources
 - Add a voluntary user survey to collect and present useful data
 - Use data to show most frequently searched areas and most sought types of foods/resources
 - Incorporate information on donating items or volunteering time

Input and feedback is welcome!

https://github.com/erinaperez/backend-food-shared/assets/111480454/b23356cb-3729-4429-b4f7-be36a9651a45
