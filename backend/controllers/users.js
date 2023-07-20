const usersRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.status(200).json(users);
});

usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;
  const passwordHash = await bcrypt.hash(password, 10);

  const newUserObj = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await newUserObj.save();
  response.status(201).json(savedUser);
});

module.exports = usersRouter;