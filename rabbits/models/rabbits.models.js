// rabbits.models.js
let db = require("../../db/db");

const getAllItems = () => {
  try {
    return db;
  } catch (err) {
    console.error("getAllItems error", err);
  }
};

const getItem = (id) => {
  try {
    return db.filter((item) => item.id === id)[0];
  } catch (err) {
    console.error("getItem error", err);
  }
};

const editItem = (id, item) => {
  try {
    const index = db.findIndex((item) => item.id == id);
    item.id = parseInt(id);
    db[index] = item;
    return db[index];
  } catch (err) {
    console.error("editItem error", err);
  }
};

const addItem = (item) => {
  try {
    item.id = db[db.length - 1].id + 1;
    db.push(item);
    return db;
  } catch (err) {
    console.error("addItem error", err);
  }
};

const deleteItem = (id) => {
  try {
    console.log("id:", id);
    db = db.filter((rabbit) => rabbit.id != id);
    return db;
  } catch (err) {
    console.error("deleteItem error", err);
  }
};

module.exports = { getAllItems, getItem, editItem, addItem, deleteItem };
