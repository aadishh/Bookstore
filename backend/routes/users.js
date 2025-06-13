const express = require("express");
const {
  getAllUsers,
  createUser,
  getJwtToken,
  profileDetails,
  getProfileDetails,
} = require("../contoller/users");

const router = express();

router.get("/", getAllUsers);

router.post("/signup", createUser);

router.post("/login", getJwtToken);

router.post("/profile/:username", profileDetails);

router.get("/profile/:username", getProfileDetails);

// router.get('/:userId',getUser)

module.exports = router;
