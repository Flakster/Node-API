import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sql5723667", "sql5723667", "UgLzJjJzUA", {
  host: "sql5.freemysqlhosting.net",
  dialect: "mysql",
  port: 3306,
});

async function testConn() {
  try {
    await sequelize.authenticate();
    console.log("Connection OK");
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
}

testConn();
