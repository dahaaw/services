var DataTypes = require("sequelize").DataTypes;
var _projects = require("./projects");
var _techs = require("./techs");

function initModels(sequelize) {
  var projects = _projects(sequelize, DataTypes);
  var techs = _techs(sequelize, DataTypes);


  return {
    projects,
    techs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
