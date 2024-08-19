import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
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
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true // Validate email format
        }
    },
    password :{
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const salt = bcrypt.genSaltSync(12);
            const hashedPassword = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hashedPassword);
        }
    }
});



Employee.checkPassword = (password,encryptedPassword)=>{
    let status = bcrypt.compareSync(password,encryptedPassword);
    console.log(password,encryptedPassword);
    console.log(status);
    return status;
  }
export default Employee;