const router = require("express").Router();
const Users = require("./users-model");
const { restricted, only } = require("../middleware/middleware");

router.get("/", (req, res, next) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:id", restricted, only("instructor"), (req, res, next) => {
  Users.findById(req.params.id).then((user) => {
    res.json(user);
  });
});
module.exports = router;
