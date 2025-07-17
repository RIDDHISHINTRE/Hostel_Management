const {Datatypes} = require('sequelize');
const sequelize = require('/../config/database');

const room = sequelize.define('room',{
    roomid:{
        type : Datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    roomno:{
        type:Datatypes.STRING,
        allowNull:false,
    },
    roomtypeid:{
        type:Datatypes.INTEGER,
        allowNull:false,
        references:{
            model:'RoomType',
            key:'roomtypeid'
        },
         onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    currentoccupancy: {
  type: DataTypes.INTEGER,
  allowNull: false,
  defaultValue: 0,
  validate: {
    max: 4 // ensures value is <= 4
  }
}
},
{
    tablename:'room',
    timestamps:true,

});
module.exports = room;
