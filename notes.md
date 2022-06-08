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

- Migração de dados -> Tranferencia de dados entre plataformas (MUDA BANDO DE DADOS , SERVIÇOS , etc)
- in project : Migração com ORM (Alterações incrementais e rastreáveis no banco) -> Alterações realizadas no banco (impactam no sistema) -> migração em ORM -> COMO ALTERAR AS TABELAS/ENTIDADES DE UMA FORMA QUE SEJA RASTREÁVEL E SE DER RUIM DA P VOLTAR.

- É necessário coordenar alterações feitas por diferentes pessoas do time nas tabelas do banco.
- Rastrear e reverter alterações feitas no banco para debugar conflitos e erros.

Gerar alterações e guardar -> comando MIGRATE



POPULANDO O BANCO !!!
usar arquivos seeds ('sementes) => tambem presente no Sequelize

-> serve p enche o banco, so dar o exemplo de dado



- - - - PADRÃO MVC - - - -
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

