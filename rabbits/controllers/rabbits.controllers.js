// rabbits.controllers.js
const {
  getAllItems,
  getItem,
  editItem,
  addItem,
  deleteItem,
} = require("../models/rabbits.models");

const listRabbits = (req, res) => {
  try {
    const resp = getAllItems();
    res.status(200).send(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getRabbit = (req, res) => {
  try {
    const resp = getItem(parseInt(req.params.id));
    res.status(200).send(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

const editRabbit = (req, res) => {
  try {
    const rabbit = req.body;
    if (rabbit.name[0] !== "J") {
      res.status(400).send("Rabbit names must start with J");
    } else {
      const resp = editItem(req.params.id, req.body);
      res.status(200).send(resp);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const addRabbit = (req, res) => {
  try {
    const rabbit = req.body;
    // { id: 15890798789, name: 'Jonathan', size: '10lbs' }
    if (rabbit.name[0] !== "J") {
      res.status(400).send("Rabbit names must start with J");
    } else {
      const resp = addItem(req.body);
      res.status(200).send(resp);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteRabbit = (req, res) => {
  try {
    const resp = deleteItem(req.params.id);
    res.status(200).send(resp);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  listRabbits,
  getRabbit,
  editRabbit,
  addRabbit,
  deleteRabbit,
};
