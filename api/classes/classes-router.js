const express = require("express");
const { route } = require("../auth/auth-router");

const Class = require("./classes-model");

const router = express.Router();

router.get("/", (req, res) => {
  Class.find()
    .then((classes) => {
      res.json(classes);
    })
    //eslint-disable-next-line
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve classes" });
    });
});

router.get("/:class_id", (req, res) => {
  const { class_id } = req.params;

  Class.findById(class_id)
    .then((classes) => {
      if (classes) {
        res.json(classes);
      } else {
        res.status(404).json({ message: "Could not find class with given ID" });
      }
    })
    //eslint-disable-next-line
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve classes" });
    });
});

router.post("/:location_id", (req, res) => {
  Class.add(req.body, req.params.location_id)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/signup/:class_id/:user_id", (req, res) => {
  Class.addClient(req.params.class_id, req.params.user_id)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

//! Need to bring in params
// router.post("/:id", (req, res) => {
//   const user_id = req.body;

//   Class.addClient(user_id)
//     .then((data) => {
//       res.status(201).json(data);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });

router.put("/:class_id", (req, res) => {
  Class.update(req.params.class_id, req.body)
    .then((classes) => {
      if (!classes) {
        res.status(404).json({ message: "Could not find class with given ID" });
      } else {
        res.json(classes);
      }
    })

    //eslint-disable-next-line
    .catch((err) => {
      res.status(500).json({ message: "Failed to update class" });
    });
});

router.delete("/:class_id", (req, res) => {
  Class.remove(req.params.class_id)
    .then(() => {
      res.json({ message: "she gone" });
    })
    //eslint-disable-next-line
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete class" });
    });
});

module.exports = router;
