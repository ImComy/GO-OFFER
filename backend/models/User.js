const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	console.log('JWT_SECRET:', process.env.JWT_SECRET);
	const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		phone: Joi.string().required().label("Phone"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
