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
    storyline.hasMany(models.plotpoints, { as: 'points', through: 'join_story_points', foreignKey: 'PP_ID' })
  })
  return storylines
}
