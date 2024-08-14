import { DataTypes } from "sequelize";

import sequelize from "../db/dbconnection.js";
const Employee =sequelize.define("employee",{
    id :{
        type : DataTypes.INTEGER,
        primaryKey : true ,
        autoIncrement : true,
        allowNull : false
    },
    username :{
        type : DataTypes.STRING,
        allowNull : false ,
    },
    email :{
        type : DataTypes.STRING,
        allowNull : false ,
        unique : true,
    },
    password :{
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

(async ()=>{
    await sequelize.sync()
    {
        console.log ("Success Created Employee Table")
    }
})();
export default Employee;