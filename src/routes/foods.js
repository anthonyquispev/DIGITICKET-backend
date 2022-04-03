const {Router} = require('express')
const router = Router()

const {getFoods, createFood, getFood, updateFood, deleteFood} = require('../controllers/foods.controller')

router.route('/')
    .get(getFoods)
    .post(createFood)
router.route('/:id')
    .get(getFood)
    .put(updateFood)
    .delete(deleteFood)

module.exports = router