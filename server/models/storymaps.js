'use strict'
module.exports = function (sequelize, DataTypes) {
  var storymaps = sequelize.define('storymaps', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {})
  storymaps.associate = function (models) {
    storymaps.belongsTo(models.users, { as: 'user', foreignKey: 'userId' })
    storymaps.hasMany(models.storylines, { as: 'lines', foreignKey: 'mapId' })
  }

  return storymaps
}
