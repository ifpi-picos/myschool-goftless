export class Config {
  constructor() {
    this.env = "production";
    this.PORT = this.normalizePort(process.env.PORT || 3000);
    this.DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : "db_host";
    this.DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : "db_port";
    this.DB_USER = process.env.DB_USER ? process.env.DB_USER : "db_user";
    this.DB_PWD = process.env.DB_PWD ? process.env.DB_PWD : "db_pass";
    this.DB_NAME = "db_production";
  }

  normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }
}
