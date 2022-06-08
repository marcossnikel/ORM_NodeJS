const database = require('../models')

class NivelController {

    static async pickAllNiveis(req, res) {
        try {
            const allNiveis = await database.Niveis.findAll();
            return res.status(200).json(allNiveis);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async pickOneNivel(req, res) {
        const { id } = req.params
        try {
            const oneNivel = await database.Niveis.findOne({
                where:
                    { id: Number(id) }
            });
            return res.status(200).json(oneNivel)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async createNivel(req, res) {
        const newNivel = req.body
        try {
            const newNivelCreated = await database.Niveis.create(newNivel)
            res.status(200).json(newNivelCreated);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    static async updateNivel(req, res) {
        const { id } = req.params
        const updatedNivel = req.body
        try {
            await database.Niveis.update(updatedNivel, {
                where:
                    { id: Number(id) }
            })

            const upNivel = await database.Niveis.findOne({
                where:
                    { id: Number(id) }
            })
            return res.status(200).json(upNivel);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async deleteNivel(req, res) {
        const { id } = req.params
        try {
            await database.Niveis.destroy({where:{id : Number(id)}})
            return res.status(200).json({message: `Nivel with id ${id} deleted `})
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}


module.exports = NivelController;