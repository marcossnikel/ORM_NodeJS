const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;


app.get('/',(req,res)=>{
    res.status(200)
    .send({mensagem : 'testing api'});
})


app.listen(port,    () => console.log(`Api on em http://localhost${port}`));


module.exports = app;
