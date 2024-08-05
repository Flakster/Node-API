import { Post } from "../models/models.js";

export async function getPosts(req, res) {
  try {
    const posts = await Post.findAll();
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
}