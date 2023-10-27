const fs = require("fs");
const path = "./storage/storage.json";

function getAllUsers() {
  const data = JSON.parse(fs.readFileSync(path));
  if (!data.length) throw new Error("data is empty");
  return data;
}

function getById(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.id == id);
  if (!filtered.length) throw new Error("id is not found");
  return filtered;
}

function createUser(name, surname, email, pwd) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.email == email);
  if (filtered.length > 0) throw new Error("Email already exist");
  const newItem = { id: data.length + 1, name, surname, email, pwd };
  data.push(newItem);
  fs.writeFileSync(path, JSON.stringify(data));
  return data;
}

function patchUser(id, clientObj) {
  const data = JSON.parse(fs.readFileSync(path));
  const oldData = data.filter((el) => el.id == id);
  if (oldData.length == 0) throw new Error("id is not found");
  const newData = { ...oldData[0], ...clientObj };
  const filtered = data.filter((el) => el.id != id);
  filtered.push(newData);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function updateById(id, name, surname, email) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.id != id);
  if (filtered.length == data.length) throw new Error("id is not found");
  const newItem = { id, name, surname, email };
  filtered.push(newItem);
  fs.writeFileSync(path, JSON.stringify(filtered));
  return filtered;
}

function deleteUser(id) {
  const data = JSON.parse(fs.readFileSync(path));
  const filtered = data.filter((el) => el.id != id);
  if (data.length == filtered.length) throw new Error("id is not found");
  fs.writeFileSync(path, JSON.stringify(filtered));
  return data;
}

module.exports = {
  getAllUsers,
  deleteUser,
  getById,
  updateById,
  createUser,
  patchUser,
};
