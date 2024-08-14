import User from "../model/user.model.js";


export const signup=async(req,res,next)=>{
    req.body.username=username;
    req.body.email=email;
    req.body.password=password;
   const result= await User.create(username,email,password);
   result ?  res.status(200).json("message" , " Successfully registered") 
   : res.status(401).json("message","Something Went Wrong");

}



export const signin =async(req,res,next)=>{
   req.body.email=email;
   req.body.password=password;
const checkemail=   await User.findOne(email);
if(checkemail){
  const checkpass=  await User.findOne(password);
  if(checkpass){
    res.status(200).json("message","Successfully login.....")
  }
  else {
    res.status(401).json("error","Try ! Again");
  }
}
}
