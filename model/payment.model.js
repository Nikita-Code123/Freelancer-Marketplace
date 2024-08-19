import { DataTypes } from "sequelize";
import sequelize from "../db/dbconnection.js";

const Payment = sequelize.define("payments", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending" // Other statuses could be "Completed", "Failed", etc.
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Payment;
