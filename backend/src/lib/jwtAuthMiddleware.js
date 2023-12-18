const JWT = require("./jwt");
const jwt = new JWT();
const db = require("./db");
require("dotenv").config();

const UserService = require("../user/user.service");
const { Users } = db;
const userService = new UserService(Users);

exports.auth = async (req, res, next) => {
  try {
  } catch (e) {}
};

exports.auth = async (req, res, next) => {
  try {
  } catch (e) {}
};

exports.auth = async (req, res, next) => {
  try {
  } catch (e) {}
};
