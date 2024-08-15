import e from "express";
import User from "../model/user.model.js";


export const signup = async (req, res, next) => {
  try {
    const errors =  validationResult(request);
    if(!errors.isEmpty())
      return response.status(401).json({error: "Bad request"});

  console.log(req.body);
  let { username, email, password } = req.body;
  console.log(username)
 
    const result = await User.create({ username, email, password });

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
};

export const signin = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const checkemail = await User.findOne({where : {email},raw:true});
    if (checkemail) {
      return User.checkPassword(password,user.password) ? response.status(200).json({message: 'sign in success',user}):response.status(401).json({error: "Bad request | Invalid password"});
    }
    else{
      
      res.status(404).json({error : "User not Found"});
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Problem" })
  }
}
