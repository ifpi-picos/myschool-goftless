export default class TeacherController {
  constructor(Teacher) {
    this.Teacher = Teacher;
    //this.Teacher.sync({force: true});
  }

  async getAll(req, res) {
    const teachers = await this.Teacher.findAll({});
    res.json(teachers);
  }

  async findById(req, res) {
    const teacher = await this.Teacher.findByPk(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({
        message: "Teacher not found."
      });
    }
  }

  async create(req, res) {
    try {
      const teacher = await this.Teacher.create(req.body);
      res.json(teacher);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const response = await this.Teacher.update(req.body, {
        where: { id: req.params.id },
        individualHooks: true
      });
      const rowsAffected = response.shift();
      if (rowsAffected > 0) {
        const teacher = response.shift()[0];
        res.json(teacher);
        return;
      }
      res.status(404).json({
        message: "Teacher not found."
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const rowsAffected = await this.Teacher.destroy({
        where: { id: req.params.id }
      });

      if (rowsAffected <= 0) {
        res.json({
          message: "This Teacher does not exist in the database."
        });
        return;
      }

      res.json({
        message: "Teacher deleted successfully!"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
