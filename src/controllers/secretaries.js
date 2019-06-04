export default class SecretaryController {
  constructor(Secretary) {
    this.Secretary = Secretary;
    //this.Secretary.sync({force: true});
  }

  async getAll(req, res) {
    const secretaries = await this.Secretary.findAll({});
    res.json(secretaries);
  }

  async findById(req, res) {
    const secretary = await this.Secretary.findByPk(req.params.id);
    if (secretary) {
      res.json(secretary);
    } else {
      res.status(404).json({
        message: "Secretary not found."
      });
    }
  }

  async create(req, res) {
    try {
      const secretary = await this.Secretary.create(req.body);
      res.json(secretary);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const response = await this.Secretary.update(req.body, {
        where: { id: req.params.id },
        individualHooks: true
      });
      const rowsAffected = response.shift();
      if (rowsAffected > 0) {
        const secretary = response.shift()[0];
        res.json(secretary);
        return;
      }
      res.status(404).json({
        message: "Secretary not found."
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const rowsAffected = await this.Secretary.destroy({
        where: { id: req.params.id }
      });

      if (rowsAffected <= 0) {
        res.json({
          message: "This Secretary does not exist in the database."
        });
        return;
      }

      res.json({
        message: "Secretary deleted successfully!"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
