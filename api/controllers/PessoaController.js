const { restart } = require('nodemon');
const database = require('../models')


class PessoaControlller {


    static async pickAllPersons(req, res) {
        try {
            const allPeople = await database.Pessoas.findAll(); //Substitui a Query de SQL

            return res.status(200).json(allPeople);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pickOnePerson(req, res) {
        const { id } = req.params
        try {
            const onePerson = await database.Pessoas.findOne({
                where:
                    { id: Number(id) }
            });
            return res.status(200).json(onePerson);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async newPerson(req, res) {
        const newStudent = req.body
        try {
            const newStudentCreated = await database.Pessoas.create(newStudent);

            return res.status(200).json(newStudentCreated);
        } catch (error) {
            res.status(500).json(error.message);
        }

    }

    static async updatePerson(req, res) {
        const updatedRegister = req.body
        const { id } = req.params;
        try {
            await database.Pessoas.update(updatedRegister, {
                where: { id: Number(id) }
            });
            const upRegister = await database.Pessoas.findOne({
                where:
                    { id: Number(id) }
            });
            return res.status(200).json(upRegister);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async deletePerson(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({ message: `person with id : ${id} deleted from database` })
        } catch (error) {
            res.status(500).json(error.message);
        }
    }


    static async pickOneRegister(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            const oneMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(oneMatricula)
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async createOneRegister(req, res) {
        const { estudanteId } = req.params
        const newRegister = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const newRegisterCreated = await database.Matriculas.create(newRegister)
            res.status(200).json(newRegisterCreated);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateRegister(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const updatedInfos = req.body
        try {
            await database.Matriculas.update(updatedInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const upRegister = await database.Matriculas.findOne({
                where:
                    { id: Number(matriculaId) }
            });
            return res.status(200).json(upRegister);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    static async deleteRegister(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                }
            });
            return res.status(200).json({ message: `register with id : ${matriculaId} deleted` })
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaControlller;
