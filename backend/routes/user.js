const express = require("express");
const TokensController = require("../controllers/tokenController");

const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);


module.exports = router;

