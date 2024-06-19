const express = require("express");
const router = express.Router();

const {
  createCategory,
  getAllCategories,
  getCategoryById,
  deleteCategoryById,
} = require("../controllers/categoryController");


const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");



router.post("/", verifyToken, checkAdminRole, createCategory); 
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.delete("/:id", verifyToken, checkAdminRole, deleteCategoryById); 

module.exports = router;
