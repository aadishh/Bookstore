const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const { firstName, lastName, userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      statusCode: 200,
      success: true,
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({ error: "Invalid Request", details: error.message });
  }
};

const getJwtToken = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      $or: [{ userName: username }, { email: username }],
    });

    if (!user) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "User not found",
      });
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res.status(401).json({
        statusCode: 401,
        success: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ id: user._id }, "your_secret_key", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Login successful",
      name: user.userName,
      token: token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Server error",
    });
  }
};

const profileDetails = async (req, res) => {
  try {
    const { username } = req.params;
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      pinCode,
      country,
      state,
      city,
    } = req.body;
    const user = await User.findOne({ userName: username });
    if (!user) {
      res.status(401).json({ message: "User Not Found" });
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    if (!user.profile) {
      user.profile = {};
    }
    user.profile.address = address;
    user.profile.pinCode = pinCode;
    user.profile.state = state;
    user.profile.country = country;
    user.profile.city = city;
    user.profile.phoneNumber = phoneNumber;

    await user.save();

    return res
      .status(200)
      .json({ statusCode: 200, message: "Profile updated" });
  } catch (error) {
    console.error("Error in profileDetails:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProfileDetails = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ userName: username });

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // Only return non-sensitive fields
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userName: user.userName,
      profile: {
        address: user.profile?.address || "",
        pinCode: user.profile?.pinCode || "",
        state: user.profile?.state || "",
        country: user.profile?.country || "",
        city: user.profile?.city || "",
        phoneNumber: user.profile?.phoneNumber || "",
      },
    };

    return res
      .status(200)
      .json({ statusCode: 200, message: "Profile fetched", data: data });
  } catch (error) {
    console.error("Error in getProfileDetails:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getJwtToken,
  profileDetails,
  getProfileDetails,
};
