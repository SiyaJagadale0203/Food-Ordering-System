const User = require('../model/UserModel'); // Import the User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Customer = require('../model/UserModel');

const secret = "mysecret";
// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email is already in use
    const existingUser = await Customer.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Customer({
      username,
      email,
      password: hashedPassword,
      // Add other user-related fields as needed
    });

    await newUser.save();

    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

// Login a user
exports.loginUser = async (req, res) => {
  try{
    const { email, password } = req.body;
    const user = await Customer.findOne({ email: email });
    if(user){
      //user exist
      // res.send("User Exist");
      const passwordMatch = await bcrypt.compare(password, user.password);
      if(passwordMatch){
        // res.send("User LoggedIn Successfull");
        const token = jwt.sign({email, role: user.role}, secret);
        res.send({ token });

      } else {
        res.status(401).send("Password is Incorrect");
      }
    } else{
      //user does not exist
      req.status(404).send("User Does Not exist");
    }
  }catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
