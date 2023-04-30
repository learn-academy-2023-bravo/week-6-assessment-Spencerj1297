# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
To add the foreign key we simply need to add a new column in the terminal and run a migrate so it will populate in the scema. The foreign key when added will give a number value that can be associated with a specific student. The foreign key would belong to cohort. This is because the cohort model needs to have something to associate with students, so when we add a student to the cohort we can give student the foreign key and it will belong_to the main model which is Cohort. 

Researched answer: To create the foreign key you need to create a new column for the database and give it the naming convention modelname_id. This needs to be equal to an integer. When determining where to put the foreign key, the rule of thumb is alway stick it with the belongs_to side. 
answer via: LEARN syllabus

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that always need params are show, edit. They need params because you are wanting to target a specific data entry. For example we would give both of these routes [params :id] so we can have the HTML form request for a certain pieace of data. 

Researched answer: To function correctly put, post, get, and delete need params. This is the case due to each one of these actions need to aquire a specfic data entry(:id). The most base level param that needs to be used is the :id param so that each route can have access to the data you want to either read, update, or delete in some fashion. 

3. Name three rails generator commands. What is created by each?

Your answer: 
1 - rails generate:db : This command will create a local database that the user can have access to in rails application.
2 - rails db:migrate : This command will perfrom a migrations that is essentially merging the input data into the application you have created. 
3 - rails generate controller Class () : This command will generate a new Class model to be used within the controller to manipulate data. 

Researched answer:
1 - rails generate: by itself this command gives a list of the potential generators. 
2 - rails generate controller: This will generate the controller for the MVC method of working with data. You will use the controller to manipulate the models and future data. 
3 - rails generate model: This commamd generates a model or class. It will populate in the schema and allows for user interaction in the controller. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
index - will display a list of all students
action: "POST" location: /students
create - will all the user to create a new student
action: "GET" location: /students/new
new - give HTML form for making new students
action: "GET" location: /students/2
show - will display a specific student from database
action: "GET" location: /students/2/edit
edit - give HTML form for updating a students info.
action: "PATCH" location: /students/2
update - Changes the students information 
action: "DELETE" location: /students/2
destroy - allows the user to delete a specfic student entry

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
 1. As a developer, I want to make application that will allow me to manage my to do list.
 2. As a developer, I can see a list of all the things that need to get done. 
 3. As a developer, I can see an button on the main page that says new, When I click it I can enter in a new task.
 4. As a developer, I can click on one of task, taking me to a new page
 5. As a developer, I can click see a box that is for checking when complete.
 6. As a developer, I can click that box and the page will redirect me to the main page, with completed next to the task I clicked
 7. As a developer, I can click on another task and go to seperate page, On the page there is a box and button for updated the task.
 8. As a developer, I can enter updated info on that task and click submit(button), and will be redirected back to the main page.
 9. As a developer, I can click on any task completed or not.
 10. As a developer, I can see another button below the update that is for deleting the task, I can click the button and I will be redirected back to the main page and that task will be gone.
 11. As a developer
