const { DataTypes } = require("sequelize");
const sequelize = require('../config/database');

const leave = sequelize.define('leave',{
    leave_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type : DataTypes.INTEGER,
        allowNull : false,
        references :{
            model : 'student',
            key : 'user_id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
    },
    start_date:{
        type : DataTypes.DATE,
        allowNull : false
    },
    end_date :{
        type : DataTypes.DATE,
        allowNull:false
    },
    Status : {
        type: DataTypes.ENUM('pending','approved','cancelled','rejected'),
        allowNull : false,
        defaultValue : 'pending'
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull : true
    }
},
{
    tablename:'leave',
    timestamps:true,

})
module.exports = leave;