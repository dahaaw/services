var DataTypes = require("sequelize").DataTypes;
var __user_roles = require("./_user_roles");
var __users = require("./_users");

function initModels(sequelize) {
  var _user_roles = __user_roles(sequelize, DataTypes);
  var _users = __users(sequelize, DataTypes);

  _users.belongsTo(_user_roles, { as: "role", foreignKey: "role_id"});
  _user_roles.hasMany(_users, { as: "_users", foreignKey: "role_id"});

  return {
    _user_roles,
    _users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
