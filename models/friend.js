'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    nickname: DataTypes.STRING,
    username: DataTypes.STRING,
    code: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {
    // associations here
  };
  return Friend;
};