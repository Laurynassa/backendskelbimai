



const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  getUsers,
  blockUser,
} = require("../controllers/userController");


const { verifyToken, checkAdminRole } = require("../Middleware/authMiddleware");

router.post("/register", registerUser); 
router.post("/login", loginUser); 
router.post("/logout", verifyToken, logoutUser);
router.get("/:id", verifyToken, getUser);
router.get("/", verifyToken, getUsers);
router.delete("/:id", verifyToken, checkAdminRole, blockUser);

module.exports = router;
