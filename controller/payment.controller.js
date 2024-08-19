import { validationResult } from "express-validator";
import Payment from "../model/payment.model.js";
import User from "../model/user.model.js";
import Proposal from "../model/proposal.model.js";

// Controller to create a payment
export const createPayment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "Bad request", errors: errors.array() });
        }

        const { amount, userId, proposalId, paymentDate } = req.body;

        // Verify if the user and proposal exist
        const user = await User.findByPk(userId);
        const proposal = await Proposal.findByPk(proposalId);

        if (!user || !proposal) {
            return res.status(404).json({ error: "User or Proposal not found" });
        }

        const payment = await Payment.create({
            amount,
            userId,
            proposalId,
            paymentDate
        });

        return res.status(201).json({ message: "Payment created successfully", payment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to update a payment
export const updatePayment = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "Bad request", errors: errors.array() });
        }

        const paymentId = req.params.id;
        const { amount, paymentDate } = req.body;

        const payment = await Payment.findByPk(paymentId);

        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }

        payment.amount = amount || payment.amount;
        payment.paymentDate = paymentDate || payment.paymentDate;

        await payment.save();

        return res.status(200).json({ message: "Payment updated successfully", payment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get payment details
export const getPayment = async (req, res) => {
    try {
        const paymentId = req.params.id;

        const payment = await Payment.findByPk(paymentId);

        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }

        return res.status(200).json({ payment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to delete a payment
export const deletePayment = async (req, res) => {
    try {
        const paymentId = req.params.id;

        const payment = await Payment.findByPk(paymentId);

        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }

        await Payment.destroy({ where: { id: paymentId } });

        return res.status(200).json({ message: "Payment deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get all payments for the authenticated user
export const getMyPayments = async (req, res) => {
    try {
        // Assuming user ID is passed in the request user object
        const userId = req.user.id;

        const payments = await Payment.findAll({ where: { userId } });

        if (payments.length === 0) {
            return res.status(404).json({ error: "No payments found for this user" });
        }

        return res.status(200).json({ payments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
