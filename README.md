<h1 align="center">Backend-E-Commerce</h1> 
  
[LinkedIn]: https://www.linkedin.com/in/jason-barrera-ramirez-b2a473204/
![license-badge](https://img.shields.io/badge/License-MIT-blueviolet)
![followers](https://img.shields.io/github/followers/jbramirez03?style=social)

[MIT]: https://choosealicense.com/licenses/mit/
## Summary
This project focuses on the backend of web-development, with making changes to a database and making calls to the same database.
It also includes the use of a server and the use of routes to make calls to the database.
## Table of Contents
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Challenges](#challenges)
- [Technologies](#technologies)
- [Future development](#future-development)
- [How to contribute](#how-to-contribute)
- [Questions](#questions)
- [Link](#link)
## Usage
In order to begin with this project you must first run `npm i` in order to install all of the packages listed as dependencies in the package.json file. You have to enter your mysql credentials in the .env file at the root of the project in order for the database connection to work. The next thing you want to do is create your database by sourcing the schema.sql file in the terminal or through the mysql extension in VS-code. Once the database is created you must seed the database with data by running the line `npm run seed` in the terminal.
After all of these steps are completed you can run the line `npm start` in your terminal and the models will be created and the server will be live for you to be able to run the different routes in a rest client such as *Postman* or *Insomnia*.
## Credits
Jason Barrera-Ramirez<br><br>
[<img align="left" width="28px" alt="LinkedIn" src="https://user-images.githubusercontent.com/82244776/128110957-497edff3-59dc-41d6-89bc-be7570e441fe.png" />][LinkedIn]<br><br>
## License
This Project is covered by the [MIT] license
## Challenges
The main challenge with this project was creating the association between models in the database and making the foreign keys work for the different models. This challenge was overcome through looking at the documentation for sequelize model relationships, [Docs](https://sequelize.org/master/manual/advanced-many-to-many.html). Another challenge was found in the routes, when trying to include different models associated to the current model being return in the rest client. This was solved by using the `through` key in the **include** array.
## Technologies
<img align="left" width="26px" alt="Node.js" src="https://user-images.githubusercontent.com/82244776/131235189-bd5f5fc2-6802-4f79-b553-267a05f37ab3.png">
<img align="left" width="27px" alt="mysql" src="https://user-images.githubusercontent.com/82244776/131235260-c522d5d8-e58d-4bd9-82ec-a3cc3c119ccd.png">
<img align="left" width="26px" alt="express" src="https://user-images.githubusercontent.com/82244776/132081029-26f8074c-5c16-40d1-999f-9ee7a64ceb7d.png">
<img align="left" width="26px" alt="Javascript" src="https://user-images.githubusercontent.com/82244776/128645657-2dad4760-43e6-42a9-90a5-8f8b3f62b4a0.png"><br><br>

## Features
The main feature for this project is being able to Post,Get,Delete, and update different models in the database. This is done through the use of routes and running a server.
## Future Development
The path this project is headed is adding a front end in order to display the information in a better format and add style to the project.
## How to Contribute
Fork the Repo and make a pull request for code to be reviewed and considered for merge to main branch.
## Questions
If there are any questions about the project get in contact with me at my [Email](mailto:jason1287712@gmail.com)
## Link 
This is the link to the walkthrough [video](https://drive.google.com/file/d/15LPzmpW1raXr9v_NsTAyZ8fZKp48HWh5/view?usp=sharing)
