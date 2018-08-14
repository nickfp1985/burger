# Eat-Da-Burger!
* A restaurant app that lets users input the names of burgers they'd like to eat. Using the MVC design pattern; Node and MySQL to query and route data, and Handlebars to generate the HTML.

* Whenever a user submits a burger name, the app will display that burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* This app stores every burger in it's database, whether devoured or not.


#### Directory structure

All the recommended files and directories should have the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
