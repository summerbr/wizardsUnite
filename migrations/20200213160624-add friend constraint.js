'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint(
      'Friends',
      ['friendID'],
      {
        type: 'foreign key',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint(
      'Friends',
      ['friendID'],
      {
        type: 'foreign key',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    )
  }
};
