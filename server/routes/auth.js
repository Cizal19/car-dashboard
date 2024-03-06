const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/authenticate", (req, res) => {
  const user = { id: 1, username: "user" }; // Mock user
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "4h",
  });

  res.send({ token });
});

module.exports = router;
