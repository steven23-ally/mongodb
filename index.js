import express from "express";
import db from "./db/conn.js";
import moviesRoute from "./routes/moviesRoutes.js"
import usersRoute from "./routes/usersRoute.js"
import dbConnection from "./db/conn.js";
import dogsRoute from "./routes/dogsRoute.js"
const app = express();
const port = 3000;
app.use(express.json())


await dbConnection()


app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/dogs",dogsRoute)
app.use("/movies",moviesRoute)
app.use("/users",usersRoute)

 

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
