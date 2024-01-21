# Historical-teams
Site that will display historical teams that has the functionality of adding more teams

## Technologies used
- NodeJS (backend)
- MongoDB (database)
- Express JS (Framework based on NodeJS)
- Mongoose (object data modeling library)
- Dotenv (environment variables)
- Nodemon (Monitoring Server - Auto restart server)
- EJS (Embedded JS Template Enginer)
- Bootstrap 5 (CSS Framework for styling and interactivity)

## Installation Instructions 
(To be added)

## User Stories
As a sports fan, I want to see teams and their logo. I want to know their history along with their notable players. I also want to add my teams here so I can have a database of the teams that I like.

As a recruiter, I want to see how the developer has organized their code in a way to ensure everything runs smoothly. I want to see MVC architecture and how the backend works together with the front end. I want to see comments on the code that explain very well how this developer came about building this project. I want this website to be responsive and styled well.

As an instructor, I want to see how the developer has organized their code and ensure the site runs smoothly. I want to look for the MVC architecture along with making sure the student uses the MEN stack.

## Wireframes
![HomePageDesktop](https://media.git.generalassemb.ly/user/51685/files/5fd8273c-d824-43ab-a86d-eef1051d2636)
![HomePageMobile](https://media.git.generalassemb.ly/user/51685/files/8cb1fc99-f552-4aa5-86ca-fcabc2773bfd)
![teamsDisplayDesktop](https://media.git.generalassemb.ly/user/51685/files/4ad59c5b-3629-4f99-a682-d372ca9503dc)
![teamsDisplayMobile](https://media.git.generalassemb.ly/user/51685/files/52f36d6a-26e3-4840-81d5-8f3a5d317ba3)
![editteamformDesktop](https://media.git.generalassemb.ly/user/51685/files/60e6a734-51d0-4cda-bc8d-8e19c21540ed)
![editteamformMobile](https://media.git.generalassemb.ly/user/51685/files/7a69b5c8-45f9-4029-9828-842f04d05193)

## Route table

| URL                          | REST Route         | HTTP Verb | CRUD Action  | Description                                   | EJS View(s)                 |
|------------------------------|--------------------|-----------|--------------|-----------------------------------------------|-----------------------------|
| `/`                          | Home               | GET       | Read         | Display the home page                         | `home.ejs`                  |
| `/about`                     | About              | GET       | Read         | Display information about the website         | `about.ejs`                 |
| `/teams`                     | Team Index         | GET       | Read         | List all teams                                | `team-index.ejs`            |
| `/teams/new`                 | New Team           | GET       | N/A          | Show form to add a new team                   | `new-team.ejs`              |
| `/teams`                     | Create Team        | POST      | Create       | Create a new team                             | Redirect to `/teams`        |
| `/teams/:id`                 | Show Team          | GET       | Read         | Show details of a specific team               | `team-details.ejs`          |
| `/teams/:id/edit`            | Edit Team          | GET       | Read         | Show form to edit a team                      | `edit-team.ejs`             |
| `/teams/:id`                 | Update Team        | PUT       | Update       | Update a specific team                        | Redirect to `/teams/:id`    |
| `/teams/:id`                 | Delete Team        | DELETE    | Delete       | Delete a specific team                        | Redirect to `/teams`        |
| `/teams/:id/addtrophy`       | Add Trophy         | PUT       | Update       | Increase trophy count for a team              | Redirect to `/teams/:id`    |
| `/teams/:id/newplayer`       | New Notable Player | GET       | N/A          | Show form to add a new notable player         | `new-player.ejs`            |
| `/teams/:id/addplayer`       | Add Notable Player | POST      | Create       | Add a new notable player to a team            | Redirect to `/teams/:id`    |


## Description of future plans for this application
- Allow users to have an option to select their favorite team and have that appear on the home page
- Edit notable players option
- Update styling on website with more professional layout and design
