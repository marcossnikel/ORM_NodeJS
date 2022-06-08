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

    static async newStudent(req, res) {
        const newStudent = req.body
        try {
            const newStudentCreated = await database.Pessoas.create(newStudent);

            return res.status(200).json(newStudentCreated);
        } catch (error) {
            res.status(500).json(error.message);
        }

    }

    static async updateRegister(req, res) {
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

    static async deleteRegister(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ 
                where: { id: Number(id) } })
            return res.status(200).json({message : `register with id : ${id} deleted`})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaControlller;