import { User } from "../models/models.js";

export async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(`error: ${error}`);
    return res.status(500).json({ msg: error.message });
  }
}

export async function createUser(req, res) {
  try {
    const { username, email } = req.body;
    const user = User.create({ username, email });
    return res.status(201).json({ msg: "User successfully created" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: error.message });
  }
}

export async function getUser(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findOne({
      where: { id },
    });
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ msg: `No user found with id: ${id}` });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const { username, email } = req.body;
    const user = await User.update(
      {
        username,
        email,
      },
      {
        where: { id },
      }
    );
    if (user) {
      return res.json({ msg: "User successfully updated" });
    } else {
      return res.status(404).json({ msg: `No user found with id: ${id}` });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const user = await User.destroy({ where: { id } });
    if (user) {
      return res.json({ msg: "user successfully deleted" });
    } else {
      return res.status(404).json({ msg: `no user was found with id: ${id}` });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
