const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router
    .get('/classes', TurmaController.pickAllClasses)
    .get('/classes/:id', TurmaController.pickOneClass)
    .post('/classes', TurmaController.createClass)
    .put('/classes/:id', TurmaController.updateClass)
    .delete('/classes/:id', TurmaController.deleteClass)


    module.exports = router