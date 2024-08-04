import sequelize from "./dbconn.js";
import { User, Post, Category } from "../models/models.js";

User
  .sync({ force: true })
  .then(() => {
    console.log("Users table synchronized successfully");
  })
  .catch((error) => {
    console.error(
      "Something went wrong while synchronizing the users table:",
      error
    );
  });

  Post
  .sync({ force: true })
  .then(() => {
    console.log("Posts table synchronized successfully");
  })
  .catch((error) => {
    console.error(
      "Something went wrong while synchronizing the posts table:",
      error
    );
  });

  Category
  .sync({ force: true })
  .then(() => {
    console.log("Categories table synchronized successfully");
  })
  .catch((error) => {
    console.error(
      "Something went wrong while synchronizing the cagtegories table:",
      error
    );
  });
