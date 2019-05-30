const enviroment = require(`./env/${process.env.NODE_ENV || "development"}.js`);
const config = new enviroment.Config();
export default config;
