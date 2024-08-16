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
        type : DataTypes.STRING,
        allowNull : false ,
        unique : true,
    },
    password :{
        type: DataTypes.STRING,
        allowNull: false,
        set(password){
          let saltKey = bcrypt.genSaltSync(12);
          let encryptedPassword = bcrypt.hashSync(password,saltKey);
          this.setDataValue("password",encryptedPassword);
        }
    }
});

(async ()=>{
    await sequelize.sync()
    {
        console.log ("Successfully Created Employee Table")
    }
})();

Employee.checkPassword = (password,encryptedPassword)=>{
    let status = bcrypt.compareSync(password,encryptedPassword);
    console.log(password,encryptedPassword);
    console.log(status);
    return status;
  }
export default Employee;