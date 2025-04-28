const express = require("express");
const { getAllUsers ,createUser, getJwtToken} = require("../contoller/users");

const router = express();

router.get('/',getAllUsers);

router.post('/signup',createUser);

router.post('/login',getJwtToken);

// router.get('/:userId',getUser)

module.exports = router
