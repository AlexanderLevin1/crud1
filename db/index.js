const conn = require('./conn');
const Customer = require('./customers');

const sync = () => {
    return conn.sync({ force: true })
}

const seed = () => {
    return Promise.all([
        Customer.create({ name: 'John' }),
        Customer.create({ name: 'Greg' })
    ])
};

module.exports = {
    sync,
    seed,
    models: {
        Customer
    }
};
