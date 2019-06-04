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

const Secretary = DB.sequelize.define("secretaries", columns, extras);

Secretary.prototype.getHash = async function() {
  return await bcrypt.hash(this.password, SALT_WORK_FACTOR);
};

Secretary.addHook("beforeCreate", function(Secretary, options) {
  return Secretary.getHash().then(hash => {
    Secretary.password = hash;
  });
});

export default Secretary;
