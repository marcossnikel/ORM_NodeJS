const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router
.get('/niveis',NivelController.pickAllNiveis)
.get('/niveis/:id',NivelController.pickOneNivel)
.post('/niveis',NivelController.createNivel)
.put('/niveis/:id',NivelController.updateNivel)
.delete('/niveis/:id',NivelController.deleteNivel)


module.exports = router
