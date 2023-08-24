 # ![transition-light](https://github.com/gschool-blue-ocean/mcsp-22-transition-hub/assets/122406231/2f755b74-daa7-4c85-a848-e9566c8fb376)

A Full-Stack React application to assist transition managers and service members keep track of their mandatory tasks as they transition out of the military.
**place screenshot of login page here**

# How it Works
This app is designed to validate logins for two types of users: transition managers and students. Managers are granted full admin rights to app features/functionality, to their manager dashboard, and every individual student dashboard. Full app functionalities include: viewing all cohorts, viewing average task completion by cohort, adding a cohort, selecting an individual cohort, viewing each student and their progress with assigned tasks, selecting a student, marking a task complete, editing a task, and adding a new task. Students (service members) only have access to their own dashboard which includes relevant personal details and all of their assigned tasks. Like managers, they are able to add and edit tasks, as well as mark tasks complete.

* User Authentication: Upon accessing the app, users are presented with a login page where they input their credentials. The app communicates with our server, which in turn interfaces with the PostgreSQL database to authenticate users. This process involves data exchange through API calls, ensuring secure access.

* Data Display and Manipulation: React components are dynamically rendered based on the user's actions. For example, when a manager selects a cohort, the app fetches cohort-specific data to display. This includes all students in that cohort, their full name, ETS date and task progress measured as a percentage. This data table allows you to sort by column and each student row is clickable, routing you to the correct student dashboard to display their task list.

* Data Flow and Presentation: Data travels seamlessly between the backend and frontend layers. Our API serves as the bridge, fetching data from the PostgreSQL database and delivering it to the React frontend. React components then render this data in an organized and user-friendly manner on the app's interface.
**place video demo of the app here**

# Workflow / Organization
From Start to Finish, this project lasted 2.5 weeks with a total of 5 sprints, lasting 4 days each. 

The workflow tools we selected for this project were: 
- [Figma](https://figma.com/) for our initial wireframing **[Link to Actual Wireframe](https://www.figma.com/file/W3RR8ihWRjIJ1XYjEGXBRA/SMTransitionHub?type=design&node-id=0%3A1&mode=design&t=RBvIaW6dZQHNTenQ-1)**
- [drawSQL](https://drawsql.app/) for our Entity Relationship Diagram **[Link to Actual ERD](https://drawsql.app/teams/joseph-carrillos-team/diagrams/blue-ocean)**
- [Jira/Confluence](https://blueocean-transitionhub.atlassian.net/jira/software/projects/SMTRAN/boards/1) for task management and documentation
- Git/GitHub for branching/merging code changes
- [Render](https://render.com/) for project deployment **[Project Link](https://transition-hub.onrender.com)]**
- Discord for daily communications (sprint planning, group troubleshooting, and code reviews)

# Technical / Unexpected Challenges Faced
* Why, what was the plan to overcome those challenges?
* What did you learn?
* Why was it a challenge
* What did you learn?
* what research was required?

# Key Lessons Learned
specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.
* Your git workflow, style guides, commit guides, etc
* What did you learn from the process
* What were key takeaways from stand ups, code reviews, etc
* Writing tests
* discuss completed tickets

# Accomplishments
mention MVP, Any non-MVP tickets (optional)
Code refactorings
Performance Optimizations
Additional features delivered

# Thoughts on Future Features / Additions
What additional features do you plan to add, how do you plan to implement those features?
* Future refactoring?
* Additional dev ops considerations?
* UI/UX additions?

# The Contributers:
- Garett Lubecki
  * [Github](https://github.com/Garett-Lubecki) | [LinkedIn](https://www.linkedin.com/in/garett-lubecki/)
- Dorion Boesch
  * [Github](https://github.com/Paz828) | [LinkedIn](https://www.linkedin.com/in/dorionboesch/)
- Michelle Dukette
  * [Github](https://github.com/mdukette978) | [LinkedIn](https://www.linkedin.com/in/michelle-dukette/)
- Yasmin Aguilar
  * [Github](https://github.com/yasminaguilarx) | [LinkedIn](https://www.linkedin.com/in/yasmin-aguilar9/)
- Joe Carrillo
  * [Github](https://github.com/jlcarrillojr81) | [LinkedIn](https://www.linkedin.com/in/joseph-carrillo-jr/)

# Tech Stack Used
![Screenshot (169)](https://github.com/gschool-blue-ocean/mcsp-22-transition-hub/assets/122406231/c17aa271-2480-4d66-b004-f49feb420be8)

# Continued Development
To view the app live or make your own contributions, follow the steps outlined below to get started!

To Start Our Application:
1) Fork and clone the repo
2) Open the project folder inside of your favorite code editor
3) Inside of your terminal, run "npm install" followed by "npm run dev"
4) Start coding!
