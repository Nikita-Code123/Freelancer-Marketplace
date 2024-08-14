import { Sequelize } from "sequelize";
const sequelize = new  Sequelize('freelancermarketplace', 'root', 'root@1234', {
    dialect: 'mysql',
    dialectOptions: {
     host : 'localhost',
    },
  });

  export default sequelize;