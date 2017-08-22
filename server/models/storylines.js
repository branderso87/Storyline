'use strict'
module.exports = function (sequelize, DataTypes) {
  var storylines = sequelize.define('storylines', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    type: DataTypes.STRING
  }, {})
  storylines.associate(function (models) {
    storylines.belongsTo(models.storymaps, { as: 'map', foreignKey: 'mapId' })
  })
  return storylines
}
