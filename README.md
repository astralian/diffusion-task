# Diffusion.io task

## Development
### Frontend
* `cd web`
* `npm i`
* `npm start`

    #### Use
  * `npm run build`
  * Add `build` folder to Chrome

### Backend
* `cd backend`
* `npm i`
* `docker-compose up -d`
* `npm run db:migrate`
* `npm run db:seed`
* `npm run dev`
* Go to `http://localhost:3001/docs` for Swagger documentation

## Comments
### Round 1:

I want to done this task with to show skills related to task description and job description.
It's a small app but I want to show different cases.

* I implemented this flow: app starting -> load from server random dish -> make search and get search results -> get dish by id
* I simulate and design API. Of cause API implementation can be different.
* I added skeleton loaders for all requests.
* All requests handled for API error.
* Search also show loader.
* I implemented small store and reducer for demonstration and also for decoupling app elements. For example we can easy change order of dish description, social sharing block and ingredients. 
* All cause different app require different approaches
* Unfortunately Chrome v3 extension allow only 600px of height 

# Round 2:
* I implemented this API with Express, MySQL, Docker and Sequelize ORM for show case. I definitely can do this without ORM
* I also used `reflect-metadata` and other fancy decorators because I like to use it and again I freely can operate without them
* Docker, Migrations, Seeds, MySQL used for show case
* I added `react-router-dom` for pragmatically navigation
* For form I used `react-hook-form` because it's best thing for handle forms
* I realized that colors of recipe description should change per difficulty of recipe. It's implemented.
* What I guess most important here that is difference between design and API **I implemented task according to API description** but there is my thoughts:
  * In search result we see some `30min` label which seems should be amount of time for cooking but it's not described in API task description. It can be implemented by adding new field by migration in next iteration.
  * Field `authenticity` can be `boolean` but this should be checked with Product Manager/Feature Owner etc.
  * Cooking ingredients on initial design seems can contain multiple values and should be colored accordingly. In API task description all ingredients is just a `string`. Again this should be discussed with Product Manager/Feature Owner. *IF* implementation should according to design we have some ways to implements this: 
    1. We can store all ingredients as JSON object with names, values and type of color
    2. We can create another tables with One-To-Many associations. `Recipe` will have many `RecipeIngredient` and `RecipeIngredient` will have may `RecipeIngredientType` for colors for example.

* What can be done more: context request logging, pagination for data responses, change structure of project for share TS Types and Interface between frontend and backend
