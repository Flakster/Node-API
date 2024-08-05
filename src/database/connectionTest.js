import sequelize from "./dbconn.js";

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection OK");
  } catch (error) {
    console.log("Something went wrong: ", error);
  }
};

testConnection();
