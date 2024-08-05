import express from "express";
import morgan from "morgan";
import homeRoutes from "./routers/home.routes.js";
import userRoutes from "./routers/user.routes.js"
const app = express();

app.use(morgan("dev"));
app.use("/api/v1", homeRoutes);
app.use("/api/v1", userRoutes);
app.use((req, res) => {
  res.status(404).send("<h1>Not found :-(</h1>");
});

export default app;
