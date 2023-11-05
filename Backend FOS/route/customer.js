const express = require("express");

const router = express.Router();

const { registerUser, loginUser, 
    // loginAdmin,
    // deleteUser, getAllUsers,changePassword, upgradeMembership
} = require("../controllers/UserController");
const { authenticateCustomer } = require("../middleware/authentication");

//const {userAuthentication} = require ('../middleware/authentication');


// router.post("/register", createUser);
router.post("/user-register", registerUser);
router.post("/user-login",authenticateCustomer, loginUser);
// router.get("/all_users", userAuthentication, getAllUsers);
// router.delete("/delete", userAuthentication, deleteUser, changePassword);
// router.put("/change-password", userAuthentication, changePassword);
// router.put("/upgrade", userAuthentication, upgradeMembership);


module.exports = router;
 