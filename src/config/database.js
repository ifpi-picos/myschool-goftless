import Sequelize from "sequelize";
import Config from "./config";

const url = `postgres://${Config.DB_USER}:${Config.DB_PWD}@${Config.DB_HOST}:${
  Config.DB_PORT
}/${Config.DB_NAME}`;

const sequelize = new Sequelize(url);

export default {
  sequelize
};
