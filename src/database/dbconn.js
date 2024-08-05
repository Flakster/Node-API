import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sql5723667", "sql5723667", "UgLzJjJzUA", {
  host: "sql5.freemysqlhosting.net",
  dialect: "mysql",
  port: 3306,
});

export default sequelize;
