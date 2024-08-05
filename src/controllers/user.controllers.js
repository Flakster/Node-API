import { User } from "../models/models.js";

export async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(`error: ${error}`);
    res.status(500).json({ msg: error.msg });
  }
}

export async function createUser(req, res) {
  try {
    const { username, email } = req.body;
    const user = User.create({ username, email });
    res.status(201).json({ msg: "User successfully created" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: error.msg });
  }
}
