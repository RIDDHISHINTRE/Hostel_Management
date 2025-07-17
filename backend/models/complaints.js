const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Complaint = sequelize.define('complaint' ,{
    com_id :{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
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
    status :{
        type : DataTypes.ENUM('open', 'in_progress', 'resolved', 'closed'),
        allowNull : false,
        defaultValue :'open'
    },
    description:{
        type : DataTypes.TEXT,
        allowNull :false
    },
    start_date :{
        type : DataTypes.DATE,
        allowNull:false,
        defaultValue : DataTypes.NOW
    },
    subject :{
        type : DataTypes.STRING ,
        allowNull :false
    }
} ,
{
    tablename:'complaint',
    timestamps:true,

})

module.exports = Complaint;