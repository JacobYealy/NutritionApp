const router = require('express').Router();
let Food = require('../models/food.model');

router.route('/').get((req, res) => {
  Food.find()
    .then(foods => res.json(foods))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const calories = Number(req.body.calories);
  const protein = Number(req.body.protein);
  const carbs = Number(req.body.carbs);
  const fats = Number(req.body.fats);

  const newFood = new Food({ name, calories, protein, carbs, fats });

  newFood.save()
    .then(() => res.json('Food added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
