const conn = require('./conn');
const { Sequelize } = conn;

const Customer = conn.define('customers', {
    name: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = Customer;

