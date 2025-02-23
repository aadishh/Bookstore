const User = require("../model/users");

const getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res
      .status(201)
      .json({
        statusCode:200,
        success: true,
        message: "User registered successfully",
        user: user,
      });
  } catch (error) {
    res.status(400).json({ error: "Invalid Request", details: error.message });
  }
};

module.exports = { getAllUsers, createUser };
