const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user' ,{
    user_id: {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    username : {
        type : DataTypes.STRING(30),
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull :false,
        unique : true,
        validate :{
            isEmail : true
        }
    },
    userType : {
        type : DataTypes.ENUM('Student' ,'Admin'),
        allowNull :false,
        defaultValue : 'Student'
    }
} ,{
    tableName : 'user',
    timestamps : true
})

module.exports = User;