export default class CoordinatorController {
  constructor(Coordinator) {
    this.Coordinator = Coordinator;
    //this.Coordinator.sync({force: true});
  }

  async getAll(req, res) {
    const coordinators = await this.Coordinator.findAll({});
    res.json(coordinators);
  }

  async findById(req, res) {
    const coordinator = await this.Coordinator.findByPk(req.params.id);
    if (coordinator) {
      res.json(coordinator);
    } else {
      res.status(404).json({
        message: "Coordinator not found."
      });
    }
  }

  async create(req, res) {
    try {
      const coordinator = await this.Coordinator.create(req.body);
      res.json(coordinator);
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
        const coordinator = response.shift()[0];
        res.json(coordinator);
        return;
      }
      res.status(404).json({
        message: "Coordinator not found."
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
          message: "This Coordinator does not exist in the database."
        });
        return;
      }

      res.json({
        message: "Coordinator deleted successfully!"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
