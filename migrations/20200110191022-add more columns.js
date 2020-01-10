'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Friends',
        'username',
        {
          allowNull: false,
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Friends',
        'code',
        {
          allowNull: false,
          type: Sequelize.INTEGER
        }
      ),
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      removeColumn('Friends', 'username'), 
      removeColumn('Friends', 'code'), 
    ])
  }
};
