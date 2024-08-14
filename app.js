import express from "express";
import bodyParser from "body-parser";
import userrouter from "./routes/user.routes.js";
import employeerouter from "./routes/employeer.routes.js";
const app=express();


app.use("/FreelancerMarketplace/Freelancer",userrouter);
app.use("/FreelancerMarketplace/Employee",employeerouter)
app.use(express.json());
app.use(bodyParser,"url-encoded");
app.listen(8000,()=>{
    console.log("Server Started..........")
})     