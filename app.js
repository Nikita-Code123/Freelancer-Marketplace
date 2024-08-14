import express from "express";
import bodyParser from "body-parser";
import userrouter from "./routes/user.routes.js";
import employeerouter from "./routes/employeer.routes.js";
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/FreelancerMarketplace/Freelancer",userrouter);
app.use("/FreelancerMarketplace/Employee",employeerouter)
app.use(express.json());

app.listen(8000,()=>{
    console.log("Server Started..........")
})     