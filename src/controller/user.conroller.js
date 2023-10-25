const express = require("express");
const {
  getAllUsers,
  getUserById,
  createData,
  updateData,
  deleteData,
} = require("../service/user.service.js");

const route = express.Router();

route.get("/", (req, res) => {
  try {
    const data = getAllUsers();
    res.send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = getUserById(id);
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/", (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = createData(name, surname, email, pwd);
    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

route.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateData(id, name, surname, email, pwd);
    res.status(201).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteData(id);
    res.status(201).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = { route };
