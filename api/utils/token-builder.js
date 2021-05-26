const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");

function tokenBuilder(user) {
  const payload = {
    id: user.id,
    username: user.username,
    role_id: user.role_id,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, JWT_SECRET, options);

  return token;
}

module.exports = tokenBuilder;
