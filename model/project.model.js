import { DataTypes } from "sequelize";
import sequelize from "../db/dbconnection.js";

const Project = sequelize.define("projects", {
    projectID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skills: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE
        
    },
    budget: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,
    deadline: {
        type: DataTypes.DATE
    },
    jobTitle :{
        type : DataTypes.STRING,
        allowNull : false
    }
})

Project.sync().then(()=>{
    console.log("Succssfully Project Table created");
}).catch(
    console.log("Try Again")
)
// (async () => {
//     await sequelize.sync();
//     console.log("Successfully created Project Table");
//   })();

export default Project;