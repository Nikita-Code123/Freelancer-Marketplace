// import User from "../model/user.dbconnection.js";
import bcrypt from "bcryptjs";
import Employee from "../model/employee.model.js";
import { validationResult } from "express-validator";
export const signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(401).json({ error: "Bad request", errors });
    console.log(req.body);
    let { username, email, password } = req.body;
    console.log(username)

    const result = await Employee.create({ username, email, password });

    if (result) {
      console.log(result)
      res.status(200).json({ message: "Successfully registered" });
    } else {
      res.status(400).json({ message: "Registration failed" });
    }
  } catch (err) {

    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }

}
export const signin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(401).json({ error: "Bad request",errors });
    let { email, password } = req.body;
    const checkemail = await Employee.findOne({ where: { email } });
    if (checkemail) {
      return Employee.checkPassword(password, checkemail.password) ? res.status(200).json({ message: 'sign in success', User })
        : res.status(401).json({ error: "Bad request | Invalid password" });
    }
    else {

      res.status(404).json({ error: "User not Found" });
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something Went Wrong ! Try Again" })
  }
}
