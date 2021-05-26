const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets/index");
const User = require("../users/users-model");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        next({ status: 401, message: "Token Invalid" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    next({ status: 401, message: "Token Required" });
  }
};

const only = (role_id) => (req, res, next) => {
  if (req.decodedJwt.role_id === role_id) {
    next();
  } else {
    next({ status: 403, message: "Must have valid access" });
  }
};

// const checkUserNameExists = (req, res, next) => {
//   const username = req.body.username;

//   User.findBy({ username })
//     .then(([user]) => {
//       if (!user) {
//         next({ status: "401", message: "Invalid Credentials" });
//       } else {
//         next();
//       }
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

//! MIDDLEWARE FUNCTION
//?? const checkIfRoleIdIsInstructor
//*check to see if role_id is 1 to determine if instructor

module.exports = {
  restricted,
  only,
  //   checkIfRoleIdIsInstructor,
  //   checkUserNameExists,
};
