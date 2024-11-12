import express from "express";
import db from "./db/conn.js";
import moviesRoute from "./routes/moviesRoutes.js"
import usersRoute from "./routes/usersRoute.js"
const app = express();
const port = 3000;
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/movies",moviesRoute)
app.use("/users",usersRoute)

 

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
