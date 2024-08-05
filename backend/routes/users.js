const router = require("express").Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require('dotenv').config();

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res.status(401).send({ message: "User already exists" });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashedPassword,
		});

		await newUser.save();

		const token = newUser.generateAuthToken();
		res.status(201).send({ token, message: "User created successfully" });
	} catch (error) {
		console.error("Error during user creation:", error); // Detailed error log
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/", async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      console.error("No token provided");
      return res.status(401).send({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      console.error("Invalid token");
      return res.status(401).send({ message: "Invalid token" });
    }

    const user = await User.findById(decoded._id);
    if (!user) {
      console.error("User not found");
      return res.status(404).send({ message: "User not found." });
    }

    res.send(user);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = router;
