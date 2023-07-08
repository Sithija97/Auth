const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get goals` });
});

const postGoals = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `post goals` });
});

const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goals : ${req.params.id}` });
});

const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goals : ${req.params.id}` });
});

module.exports = { getGoals, postGoals, updateGoals, deleteGoals };
