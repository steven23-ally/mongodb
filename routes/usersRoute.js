import express from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
const router = express.Router();
router.get("/", async (req, res) => {
  const collection = db.collection("users");
  const users = await collection.find().limit(15).toArray();
  res.status(200).json(users);
});
router.post("/", async (req, res) => {
  const collection = db.collection("users");
  const result = await collection.insertOne(req.body);
  res.status(201).json(result);
  // res.json(req.body)
});
router.get("/:id",async(req,res)=>{
    const userId =new ObjectId(req.params.id)
    const collection = db.collection("users")
const result = await collection.findOne({_id:userId})
res.json(result)
})

export default router;
