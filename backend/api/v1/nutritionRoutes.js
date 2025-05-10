const express = require("express");
const {
  getAllNutritionItems,
  getNutritionItem,
  postNutritionItem,
  patchNutritionItem,
  deleteNutritionItem,
} = require("../../controllers/nutritionController");

const router = express.Router();

// get
router.get('/',getAllNutritionItems)
router.get('/:nutrition_itemID',getNutritionItem)

// post
router.post('/',postNutritionItem)

// patch 
router.patch('/:nutrition_itemID',patchNutritionItem)

// delete
router.delete('/:nutrition_itemID',deleteNutritionItem)

module.exports = router;