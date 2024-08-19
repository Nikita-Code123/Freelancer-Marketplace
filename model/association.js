import sequelize from './db/dbconnection.js';
import User from './model/user.model.js';
import Employee from './model/employee.model.js';
import Project from './model/project.model.js';
import Proposal from './model/proposal.model.js';
import Payment from './model/payment.model.js';

const defineAssociations = () => {
    // Existing Associations
    Employee.belongsToMany(Project, { through: 'EmployeeProjects' });
    Project.belongsToMany(Employee, { through: 'EmployeeProjects' });

    User.hasMany(Proposal, { foreignKey: 'freelancerId', as: 'proposals' });
    Proposal.belongsTo(User, { foreignKey: 'freelancerId', as: 'freelancer' });

    Project.hasMany(Proposal, { foreignKey: 'projectId', as: 'proposals' });
    Proposal.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });

    Employee.hasMany(Proposal, { foreignKey: 'employeeId', as: 'proposals' });
    Proposal.belongsTo(Employee, { foreignKey: 'employeeId', as: 'employee' });

    // Payment Associations
    Payment.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    User.hasMany(Payment, { foreignKey: 'userId', as: 'payments' });

    // Payment belongs to a Project
    Payment.belongsTo(Project, { foreignKey: 'projectId', as: 'project' });
    Project.hasMany(Payment, { foreignKey: 'projectId', as: 'payments' });

    // Payment belongs to a Proposal
    Payment.belongsTo(Proposal, { foreignKey: 'proposalId', as: 'proposal' });
    Proposal.hasOne(Payment, { foreignKey: 'proposalId', as: 'payment' });

    // Payment belongs to an Employee
    Payment.belongsTo(Employee, { foreignKey: 'employeeId', as: 'employee' });
    Employee.hasMany(Payment, { foreignKey: 'employeeId', as: 'payments' });

    // User has many ratings
    User.hasMany(Rating, { foreignKey: 'userId', as: 'ratings' });
    Rating.belongsTo(User, { foreignKey: 'userId', as: 'user' });

    // Proposal has many ratings
    Proposal.hasMany(Rating, { foreignKey: 'proposalId', as: 'ratings' });
    Rating.belongsTo(Proposal, { foreignKey: 'proposalId', as: 'proposal' });
};

// Sync models and associations
const syncModels = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced and associations defined");
    } catch (error) {
        console.error("Error syncing database:", error);
    }
};

// Execute the functions
defineAssociations();
syncModels();

export { defineAssociations, syncModels };
