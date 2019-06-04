import Sequelize from "sequelize";
import DB from "../config/database";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

const columns = {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  cpf: {
    type: Sequelize.STRING(15),
    allowNull: false,
    validate:{
      notEmpty: true,
      is: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/i
    }
  },
  phone:{
    type: Sequelize.STRING(15),
    allowNull: false,
    validate:{
      notEmpty: true,
      is: /\(\d{2,}\) \d{4,}\-\d{4}$/i
    }
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  access_level: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
};

const extras = { timestamps: false };

const Coordinator = DB.sequelize.define("coordinators", columns, extras);

Coordinator.prototype.getHash = async function() {
  return await bcrypt.hash(this.password, SALT_WORK_FACTOR);
};

Coordinator.addHook("beforeCreate", function(Coordinator, options) {
  return Coordinator.getHash().then(hash => {
    Coordinator.password = hash;
  });
});

export default Coordinator;
