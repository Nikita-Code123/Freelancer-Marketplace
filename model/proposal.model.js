import sequelize from "../db/dbconnection.js";
import { DataTypes } from "sequelize";
const Proposal =sequelize.define("proposals",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    user : {
        type : DataTypes.INTEGER,
        references : true,
    },
    cover_letter : {
        type : DataTypes.BLOB,
        allowNull : false
    },
    proposed_budget :{
        type : DataTypes.INTEGER,
        allowNull : false 
    },
    estimated_timeline :{
        type : DataTypes.DATE,
        allowNull : false 
    }
})


Proposal.sync().then(()=>{
    console.log("Succssfully Proposals Table created");
}).catch(
    console.log("Try Again")
)

export default Proposal;