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

const Responsible = DB.sequelize.define("responsibles", columns, extras);

Responsible.prototype.getHash = async function() {
  return await bcrypt.hash(this.password, SALT_WORK_FACTOR);
};

Responsible.addHook("beforeCreate", function(Responsible, options) {
  return Responsible.getHash().then(hash => {
    Responsible.password = hash;
  });
});

export default Responsible;
