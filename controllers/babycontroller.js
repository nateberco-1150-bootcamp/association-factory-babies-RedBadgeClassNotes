const { Router } = require("express");
const { Baby } = require("../models");
const validateSession = require("../middleware/validate-session");
const router = Router();



router.post("/create", validateSession, function (req, res) {
  if (req.user.role != 'Admin' ) {
    res.json({message: "You are not an Admin!!!" })
  }
  console.log(req.user.id);
  const babyEntry = {
    name: req.body.name,
    sex: req.body.sex,
    weight: req.body.weight,
    userId: req.user.id,
  };
  Baby.create(babyEntry)
    .then((baby) => res.status(200).json(baby))
    .catch((err) => res.status(500).json({ error: err }));
});


router.get("/get", validateSession, function (req, res) {
  const query = {
    where: { userId: req.user.id },
    include: "user",
  };
  Baby.findAll(query)
    .then((baby) => res.status(200).json(baby))
    .catch((err) => res.status(500).json({ error: err }));
});


module.exports = router;
