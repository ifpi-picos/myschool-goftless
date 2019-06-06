export default class StudentController {
  constructor(Student) {
    this.Student = Student;
    //this.Student.sync({force: true});
  }

  async getAll(req, res) {
    const students = await this.Student.findAll({});
    res.json(students);
  }

  async findById(req, res) {
    const student = await this.Student.findByPk(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({
        message: "Student not found."
      });
    }
  }

  async create(req, res) {
    try {
      const student = await this.Student.create(req.body);
      res.json(student);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const response = await this.Student.update(req.body, {
        where: { id: req.params.id },
        individualHooks: true
      });
      const rowsAffected = response.shift();
      if (rowsAffected > 0) {
        const student = response.shift()[0];
        res.json(student);
        return;
      }
      res.status(404).json({
        message: "Student not found."
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const rowsAffected = await this.Student.destroy({
        where: { id: req.params.id }
      });

      if (rowsAffected <= 0) {
        res.json({
          message: "This student does not exist in the database."
        });
        return;
      }

      res.json({
        message: "Student deleted successfully!"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
