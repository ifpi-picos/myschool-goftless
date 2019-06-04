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
  date_of_birth: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING(80),
    allowNull: false
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

const Teacher = DB.sequelize.define("teachers", columns, extras);

Teacher.prototype.getHash = async function() {
  return await bcrypt.hash(this.password, SALT_WORK_FACTOR);
};

Teacher.addHook("beforeCreate", function(Teacher, options) {
  return Teacher.getHash().then(hash => {
    Teacher.password = hash;
  });
});

export default Teacher;
