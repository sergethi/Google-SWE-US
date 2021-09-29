# Assignment

Everyone is obsessed with data collection. So much so that many of the most popular applications and technologies revolve around users collecting and reporting data about themselves. 

Your team has a (coach specified) number of days in which to [design](https://multiverselearningproducts.github.io/curriculum/Bootcamp/Unit-6-End_Of_Bootcamp_Group_Project/0.6.4-Design) and develop a full stack application that focuses on personal user data collection, and models the entirety of the software development lifecycle. 

For example, potential applications could include:

* Personalized fitness tracker
* Restaurant rating app
* Task manager 

All code must be stored in a GitHub repository and [git branches and pull requests](https://multiverselearningproducts.github.io/curriculum/Bootcamp/Unit-6-End_Of_Bootcamp_Group_Project/0.6.6-Branching_and_Pull_Requests) used to review code changes from individuals.

Each GitHub repository has a section for hosting documentation called a 'wiki'. A README.md file in your repository can describe at a high level what your project is about; you can use the wiki to add additional documentation.

You should work in an [Agile](https://multiverselearningproducts.github.io/curriculum/Bootcamp/Unit-6-End_Of_Bootcamp_Group_Project/0.6.3-Agile_Development) manner, using a [GitHub project board](https://multiverselearningproducts.github.io/curriculum/Bootcamp/Unit-6-End_Of_Bootcamp_Group_Project/0.6.5-GitHub_Projects) to document and assign tasks and holding daily standups to communicate progress and any blockers.

You may want to [deploy your code](https://multiverselearningproducts.github.io/curriculum/Bootcamp/Unit-6-End_Of_Bootcamp_Group_Project/0.6.7-Deployment_with_Heroku) to a cloud server.

You may want to make use of the following tools to support your development:

* A Google chat to aid team communication
* A [Jam Board](https://jamboard.google.com/) to brainstorm ideas

## Show and tell

At the end of the week you will have the opportunity to present your project as a group. Below are some suggested talking points. To show your app working you can prepare a short demo that showcases the main functionality of the app.

* How did you find working as a group?
* How easy was it to incorporate tools and design patterns you had been introduced to during the bootcamp?
* What would you do differently next time?


One of the primary requirements for this project is to allow multiple users the opportunity to save data to their own personal account. Similar to how Netflix and other apps have profiles, your application should allow users to create new profiles and store data linked specifically to a given profile.
<br>

If your group were to develop a fitness tracker, here are some of the functional requirements that your app is expected to have:

## Functional requirements (what the system has to do)
| Id | Priority | Description |
|:---:|:---:|:---:|
| F1 | MUST | Persistent users and passwords that are directly associated with personalized data. |
| F2 | MUST | Data input should track date and time. <br> Example: Workouts that are input should include when that workout occurred. |
| F3 | MUST | Users should be able to filter data based on criteria pertinent to the application. <br> Example: User should be able to filter by most calories burned (ie). |
| F4 | MUST | Users should be able to delete data instances. |
| F5 | MUST | Users should be able to edit data instances. |
| F6 | MUST | Users should be able to create a profile with at least two personalized settings. <br> Example: When the user signs into their profile, the background color of the app changes to their color preference. |
| F6 | MUST | Each data instance should have at least 4 distinct attributes. <br> Example: A workout instance might include total time spent, workout type, date, time, and calories burned. |
| F7 | SHOULD | (optional) The application should have a data analytic or visual component. <br> Example: Application shows user the average calories burned across all workouts.  |

## Non-functional requirements (the constraints on the system)
| Id | Priority | Description |
|:---:|:---:|:---:|
| NF1 | MUST | The application must have client & server-side validation in place |
| NF2 | MUST | The application must have evidence of automated unit testing |
| NF3 | MUST | The application code must be documented in a manner that it would be easy for a new developer to understand |
| NF4 | MUST | The application code must be stored in a GitHub repository and deployed on Heroku. |
| NF5 | MUST | There must be documentation which describes:  * how to run the application * features of the application * design decisions * team roles & responsibilities * links to UI wireframes * links to UML use case, class and sequence diagrams * links the the database design * links to a unit test coverage report |

