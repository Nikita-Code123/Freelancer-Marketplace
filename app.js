import express from "express";
import bodyParser from "body-parser";
import userrouter from "./routes/user.routes.js";
import employeerouter from "./routes/employeer.routes.js";
import paymentRouter from "./routes/payment.routes.js"; // Import payment routes
import { defineAssociations, syncModels } from './associations.js'; // Import associations setup

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/FreelancerMarketplace/Freelancer", userrouter);
app.use("/FreelancerMarketplace/Employee", employeerouter);
app.use("/FreelancerMarketplace/Payment", paymentRouter); // Use payment routes
app.use("/FreelancerMarketplace/Ratings", ratingRouter); // Add rating routes

app.use(express.json());

// Set up associations and sync models
defineAssociations();
syncModels();

app.listen(8000, () => {
    console.log("Server Started..........");
});
