export class Config {
  constructor() {
    this.env = "development";
    this.PORT = this.normalizePort(process.env.PORT || 3000);
    this.DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : "localhost";
    this.DB_PORT = process.env.DB_PORT ? process.env.DB_PORT : "5432";
    this.DB_USER = process.env.DB_USER ? process.env.DB_USER : "postgres";
    this.DB_PWD = process.env.DB_PWD ? process.env.DB_PWD : "postgres";
    this.DB_NAME = "my_school";
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
