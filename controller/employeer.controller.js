// import User from "../model/user.dbconnection.js";
import Employee from "../model/employee.model.js";
export const signup = async (req, res, next) => {
  console.log(req.body);
  let { username, email, password } = req.body;
  console.log(username)
  try {
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
    let { email, password } = req.body;
    const checkemail = await Employee.findOne({where : {email}});
    if (checkemail) {
      const checkpass = await Employee.findOne({where :{password}});
      if (checkpass) {
        res.status(200).json({message : " Successfully Login"})
      }
      else {
        res.status(401).json({error : "Password Incorrect"});
      }
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
