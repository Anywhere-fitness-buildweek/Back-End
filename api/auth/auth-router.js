const buildToken = require("../utils/token-builder");
const router = require("express").Router();
// const {
//   checkUserNameExists,
//   //   checkIfRoleIdIsInstructor,
// } = require("../middleware/middleware");
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

router.post(
  "/register",
  //   checkUserNameExists,
  //   checkIfRoleIdIsInstructor,
  (req, res, next) => {
    let user = req.body;

    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.add(user)
      .then((saved) => {
        console.log(saved);
        res.json(saved);
      })
      .catch(next);
  }
);

router.post("/login", async (req, res, next) => {
  let { username, password } = req.body;
  const user = await Users.findBy(username);
  console.log(user);
  try {
    console.log(password, user.password);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user);
      res
        .status(200)
        .json({ message: `Welcome back ${user.username}!`, token });
    } else {
      res.status(401).json({ message: `Invalid Credentials` });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
