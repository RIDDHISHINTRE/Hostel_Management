// models/roomtype.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // assuming you have sequelize instance exported

const RoomType = sequelize.define('RoomType', {
  roomtypeid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fees: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  }
}, {
  tableName: 'roomtype',
  timestamps: false,
});

module.exports = RoomType;
