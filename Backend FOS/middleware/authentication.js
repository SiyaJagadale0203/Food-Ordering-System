// const secret = "mysecret";

// const jwt = require("jsonwebtoken");

// const userAuthentication = (req, res, next) => {
//   let token = req.headers.authorization;
//   if (token) {
//     token = token.split(" ")[1];
//     try {
//       const user = jwt.verify(token, secret);
//       console.log(user);
//       req.user = user;
//       next();
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Internal server error");
//     }
//   } else {
//     res.status(401).send("You are not authenticated as no token found.");
//   }
// };


// const adminAuthentication = (req, res, next) => {
//   let token = req.headers.authorization;
//   if (token) {
//     token = token.split(" ")[1];
//     try {
//       const user = jwt.verify(token, secret);
//       req.user = user;
//       if (user.role === "admin") {
//         next();
//       } else {
//         res.status(401).send("You are not authorized to perform this action.");
//       }
//     } catch (err) {
//       console.error(err);
//       res.status(500).send("Internal server error");
//     }
//   } else {
//     res.status(401).send("You are not authenticated as no token found.");
//   }
// };


// module.exports = {
//   userAuthentication,
//   adminAuthentication,
// };

// authMiddleware.js
const Customer = require('../model/UserModel');
const Admin = require('../model/Admin');

exports.authenticateCustomer = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if a customer with the given username and password exists
  const customer = await Customer.findOne({ username, password });

  if (customer) {
    // If valid credentials, attach the customer to the request object
    req.customer = customer;
    next();
  } else {
    // If invalid credentials, send an unauthorized response
    res.status(401).json({ error: 'Unauthorized' });
  }
};

exports.authenticateAdmin = async (req, res, next) => {
  const { username, password } = req.body;

  // Check if an admin with the given username and password exists
  const admin = await Admin.findOne({ username, password });

  if (admin) {
    // If valid credentials, attach the admin to the request object
    req.admin = admin;
    next();
  } else {
    // If invalid credentials, send an unauthorized response
    res.status(401).json({ error: 'Unauthorized' });
  }
};

