# Notes of class

sequelize sequelize-cli path

Sequelize ->  Install and use methods
Sequelize-cli -> Use some command line resources
Path -> Utilized 


Sequelise :
- Create base files (empy project) with some files
-> Npx sequelize-cli init 
NPX : run local dependencies 
create
- Models
- Migrations
- Seeders

.sequelizerc -> used to "tell" sequelize where to look for files


Our system -> Students , Professors and Classe
1st thing -> Identify what table are the most simplifyied (People) in this case (Diagram in Folder)
Why -> dont use any other table 
How to create - - - -  >    what whe want ? table = people = -> id // name // active // email // role


Migrations - - - > 2 functions (up , down )
up -> create migration ; create table
down -> delete migration ; drop table
WHAT IS AN MIGRATION ???

- Data Migration -> Transfer data between plataforms (CHANGE DATABASES, SERVICES , ETC)
- in project : Migration with ORM (Incremental changes and traceable in DB) -> Changes in file (impactam no sistema) -> migration in ORM -> HOW TO CHANGE TABLES IN ONE WAY THAT BECAME TRACEABLE AND WITH GOES WRONG IT IS POSSIBLE TO REVERT



- It is necessary coordenate changes made by different persons in team in tables of db
- Track and revert changes made in DB to debug conflicts and errors.

Generate changes and store ->  MIGRATE command



PLUNDER OR DB!!!
using - SEEDS - files -> also presents in Sequelize

-> He servers for fill or DB , give an EXAMPLE of DATA



- - - - MVC PATTERN - - - -
MODEL
VIEW
CONTROLLER

In our project :


    Model -> Really Important -> Rules of the thing -> Cant be acessible for everyone 
    Model < - > Rest of App
    - > CONTROLLER !!! Connect them


Example : If we want to access the model 'Pessoas' -> How we do w controllers ??
- > Req HTTP (/pessoas) -> Call the controller 'Pessoas' -> Call the Model 'Pessoas' -> Send Data to the Controller -> Controller send data to 'View' -> and View Generate a Response (JSON/PAGE/HTML/ETC) -> User.

-> Design Patters -> used to everyone that works in the project be possible to understand what is happening in the project


-> We already create the model Pessoas but are not connected to any route or view yet


-> Creating Controllers !!

Create a new controller and route to or 'Pessoas' table


> Crud Methods
- Create ; Register ; Update and Delete



## Relationships and associations

Table Pessoas -> Created and  Controller Created

PK -> Primary Key

Order to create  -> models that don´t use FK - - - -> Foreign Keys

You need to create the migrations in order of use (using the relationship) of then to check the order   


## Associations 
    Relationships between columns
    HasOne -> Ex: One Book  ' hasOne' Price
    BelongsTo -> 
    HasMany -> One to Many
    BelongsToMany


    -> Methods !!


You need to associate both sides of the relationship -> reference the table that will be used in DB

Matriculas needs to be associated with Pessoas in their controllers and routes !




