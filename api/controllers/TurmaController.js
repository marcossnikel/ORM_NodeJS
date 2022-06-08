const database = require('../models')

class TurmaController {
  static async pickAllClasses(req, res){
    try {
      const allClasses = await database.Turmas.findAll()
      return res.status(200).json(allClasses)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pickOneClass(req, res) {
    const { id } = req.params
    try {
      const oneClass = await database.Turmas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(oneClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async createClass(req, res) {
    const newClass = req.body
    try {
      const newClassCreated = await database.Turmas.create(newClass)
      return res.status(200).json(newClassCreated)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params
    const newInfos = req.body
    try {
      await database.Turmas.update(newInfos, { where: { id: Number(id) }})
      const updatedClass = await database.Turmas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(updatedClass)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `class with id =  ${id} deleted` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = TurmaController