const express = require("express");
const {
  regiserUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", regiserUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
