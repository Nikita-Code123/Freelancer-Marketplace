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
    type: DataTypes.STRING,
    allowNull: false,
    set(v){
      let saltKey = bcrypt.genSaltSync(12);
      let encryptedPassword = bcrypt.hashSync(v,saltKey);
      this.setDataValue("password",encryptedPassword);
    }
  }
});

(async () => {
  await sequelize.sync();
  console.log("Successfully created Freelancer Table");
})();
User.checkPassword = (password,encryptedPassword)=>{
  let status = bcrypt.compareSync(password,encryptedPassword);
  console.log(password,encryptedPassword);
  console.log(status);
  return status;
}
export default User;