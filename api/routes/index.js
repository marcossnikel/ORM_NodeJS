//Entrypoint of routes !
const bodyParser = require('body-parser');
const people = require('./pessoasRoute');

module.exports = app =>{
    app.use(bodyParser.json());
    app.use(people);
}