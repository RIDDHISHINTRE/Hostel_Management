// models/student.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    guardian_contact: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT
    },
    year: {
      type: DataTypes.INTEGER
    },
    department: {
      type: DataTypes.STRING(10),
      validate: {
        isIn: [['Comp', 'IT', 'ENTC', 'ECE', 'AIDS']]
      }
    },
    room_no: {
      type: DataTypes.INTEGER
    },
    paymentstatus:{
        type: DataTypes.varchar(10),
        allownull:true,
        validate: {
            isIn: [['paid', 'unpaid','in progress']]
        }
        //defaultValue: false
    }
  }, {
    tableName: 'student',
    timestamps: false
  });

  return Student;
};
