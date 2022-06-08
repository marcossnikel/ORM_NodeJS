//Entrypoint of routes !
const bodyParser = require('body-parser');

const people = require('./pessoasRoute');
const niveis = require('./niveisRoute');
const classes = require('./turmasRoute');

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        people,
        niveis,
        classes
    )
}
