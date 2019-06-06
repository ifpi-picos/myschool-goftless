export default class ResponsibleController {
  constructor(Responsible) {
    this.Responsible = Responsible;
    //this.Responsible.sync({force: true});
  }

  async getAll(req, res) {
    const responsibles = await this.Responsible.findAll({});
    res.json(responsibles);
  }

  async findById(req, res) {
    const responsible = await this.Responsible.findByPk(req.params.id);
    if (responsible) {
      res.json(responsible);
    } else {
      res.status(404).json({
        message: "Responsible not found."
      });
    }
  }

  async create(req, res) {
    try {
      const responsible = await this.Responsible.create(req.body);
      res.json(responsible);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const response = await this.Responsible.update(req.body, {
        where: { id: req.params.id },
        individualHooks: true
      });
      const rowsAffected = response.shift();
      if (rowsAffected > 0) {
        const responsible = response.shift()[0];
        res.json(responsible);
        return;
      }
      res.status(404).json({
        message: "Responsible not found."
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const rowsAffected = await this.Responsible.destroy({
        where: { id: req.params.id }
      });

      if (rowsAffected <= 0) {
        res.json({
          message: "This Responsible does not exist in the database."
        });
        return;
      }

      res.json({
        message: "Responsible deleted successfully!"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
