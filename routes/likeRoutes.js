const express = require("express");
const router = express.Router();

const {
  createLike,
  deleteLikeByUserIdAndAdId,
  getLikesByUserId,
  getLikesByAdId,
  checkIfAdIsLikedByUser,
} = require("../controllers/likeController");


const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");



router.post("/ad/:id", verifyToken, createLike);
router.delete("/ad/:id", verifyToken, deleteLikeByUserIdAndAdId);
router.get("/ad/:id", getLikesByAdId);
router.get("/ad/:id/isLiked", verifyToken, checkIfAdIsLikedByUser);
router.get("/", verifyToken, getLikesByUserId);

module.exports = router;
