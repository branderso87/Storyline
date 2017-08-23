'use strict';
module.exports = function(sequelize, DataTypes) {
  var plotpoints = sequelize.define('plotpoints', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.TEXT,
    color: DataTypes.STRING,
    bEvent: DataTypes.STRING,
    aEvent: DataTypes.STRING,
    img: DataTypes.STRING,
    link: DataTypes.STRING
  }, {})
  plotpoints.associate = function (models) {
    plotpoints.belongsToMany(models.storylines, { as: 'lines', through: 'join_story_points', foreignKey: 'SL_ID' })
  }
  return plotpoints
}
