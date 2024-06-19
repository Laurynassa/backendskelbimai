



const express = require("express");
const router = express.Router();

const {
  createAd,
  getAllAds,
  getAdById,
  getAdsByUserId,
  getUsersFavoriteAds,
  updateAd,
  deleteAd,
  blockAd, 
} = require("../controllers/adController");

// middleware:
const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");



router.post("/", verifyToken, createAd);
router.get("/", getAllAds);
router.get("/:id", verifyToken, getAdById);
router.put("/:id", verifyToken, updateAd);
router.delete("/:id", verifyToken, deleteAd);
router.patch("/block/:id", verifyToken, checkAdminRole, blockAd); 
router.get("/user/:id", verifyToken, getAdsByUserId);
router.get("/favorites/user/:id", verifyToken, getUsersFavoriteAds)

module.exports = router;
