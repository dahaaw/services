const initModel = require('./init-models');
const dbConnect = require('../services/models/connect');

// dbConnect.sync().catch((err) => console.log(err));

const runModel = initModel(dbConnect);

module.exports = runModel;