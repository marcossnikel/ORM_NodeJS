//creating routes
const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();


router.get('/pessoas',PessoaController.pickAllPersons);
router.get('/pessoas/:id',PessoaController.pickOnePerson);
router.post('/pessoas',PessoaController.newStudent);
router.put('/pessoas/:id',PessoaController.updateRegister);
router.delete('/pessoas/:id',PessoaController.deleteRegister);


module.exports = router;

