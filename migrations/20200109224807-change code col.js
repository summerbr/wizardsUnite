'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'code',
      {
        type: Sequelize.BIGINT(12),
        allowNull: false,
        unique: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Users',
      'code',
      {
        type: Sequelize.INT
      }
    )
  }
};
