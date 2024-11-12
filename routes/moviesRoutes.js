import express from "express";
import db from "../db/conn.js";
const router = express.Router();
router.get("/", async (req, res) => {
    const collection = db.collection("movies");
    const movies = await collection.find({}).limit(10).toArray();
    console.log(movies);
    res.json(movies);
  });






export default router;
