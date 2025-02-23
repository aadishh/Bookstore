const express = require("express");
const { getAllUsers ,createUser} = require("../contoller/users");

const router = express();

router.get('/',getAllUsers);

router.post('/signup',createUser);

// router.get('/:userId',getUser)

module.exports = router
