//creating routes
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
    .get('/pessoas', PessoaController.pickAllPersons)
    .get('/pessoas/:id', PessoaController.pickOnePerson)
    .post('/pessoas', PessoaController.newPerson)
    .put('/pessoas/:id', PessoaController.updatePerson)
    .delete('/pessoas/:id', PessoaController.deletePerson)

    //Registers(Matriculas)
    .get('/pessoas/:estudanteId/register/:matriculaId',PessoaController.pickOneRegister)
    .post('/pessoas/:estudanteId/register',PessoaController.createOneRegister)
    .put('/pessoas/:estudanteId/register/:matriculaId',PessoaController.updateRegister)
    .delete('/pessoas/:estudanteId/register/:matriculaId',PessoaController.deleteRegister)


module.exports = router;


