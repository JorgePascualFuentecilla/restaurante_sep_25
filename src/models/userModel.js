import {DataTypes, ENUM} from "sequelize";
import sequelize from "../config/sequelize.js"

const User = sequelize.define ( 'user',{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.String(45),
        allowNull: false,
    },
    last_name:{
        type: DataTypes.String(45),
        allowNull: true,
    },
    email:{
        type: DataTypes.String(100),
        allowNull: false,
        unique:true,
    },
    tel:{
        type: DataTypes.String(45),
        allowNull: true,

    },
    rol:{
        type: DataTypes.ENUM("client", "staff", "admin"),
        allowNull: true,
    }

})

export default User;
