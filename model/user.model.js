import { Sequelize ,DataTypes} from "sequelize";

import sequelize from "../db/dbconnection.js";

const User = sequelize.define('user', {
    id:{
      type :DataTypes.INTEGER,
        primaryKey : true ,
        autoIncrement : true ,
        allowNull : false
    },
  username: {
    type : DataTypes.STRING,
    allowNull : false ,
  },
  email : {
    type : DataTypes.STRING,
    allowNull : false ,
    unique : true 
  },
  password: {
    type: DataTypes.INTEGER, 
    allowNull : false 
  }
});

(async () => {
  await sequelize.sync({ force: true });
  console.log("Successfully created Freelancers Table");
})();

export default User;