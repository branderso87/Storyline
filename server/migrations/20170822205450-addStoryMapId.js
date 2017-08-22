'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('storylines', 'mapId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'storymaps',
        key: 'id'
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('storylines', 'mapId')
  }
}
