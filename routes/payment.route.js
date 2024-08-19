import express from "express";
import { body } from "express-validator";
import {
    createPayment,
    updatePayment,
    getPayment,
    deletePayment,
    getMyPayments
} from "../controller/payment.controller.js";

const router = express.Router();

// Route to create a new payment
router.post("/createPayment",
    body("amount", "Amount is required").notEmpty(),
    body("userId", "User ID is required").notEmpty(),
    body("proposalId", "Proposal ID is required").notEmpty(),
    body("paymentDate", "Payment date is required").notEmpty(),
    createPayment
);

// Route to update a payment
router.put("/updatePayment/:id",
    body("amount", "Amount is required").optional().notEmpty(),
    body("paymentDate", "Payment date is required").optional().notEmpty(),
    updatePayment
);

// Route to get a specific payment by ID
router.get("/getPayment/:id", getPayment);

// Route to delete a payment
router.delete("/deletePayment/:id", deletePayment);

// Route to get all payments for the authenticated user
router.get("/myPayments", getMyPayments);

export default router;
