import { User } from "../models/models.js";

export async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(`error: ${error}`)
    res.status(500).json({"msg": error});
  }
}
