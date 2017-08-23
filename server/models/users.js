'use strict'
module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    img: DataTypes.STRING
  }, {})
  users.associate = function (models) {
    users.hasMany(models.storymaps, { as: 'maps', foreignKey: 'userId' })
  }

  return users
}
