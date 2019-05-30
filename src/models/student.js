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
  sex: {
    type: Sequelize.ENUM,
    values: ["M", "F"],
    allowNull: false
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
  registration: {
    type: Sequelize.STRING(50),
    allowNull: false
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

const Student = DB.sequelize.define("students", columns, extras);

Student.prototype.getHash = async function() {
  return await bcrypt.hash(this.password, SALT_WORK_FACTOR);
};

Student.addHook("beforeCreate", function(student, options) {
  return student.getHash().then(hash => {
    student.password = hash;
  });
});

export default Student;
