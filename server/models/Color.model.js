const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const Color = sequelize.define("color", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true ,
        validate: {
            is: {
                args: /^[a-zA-Z]+[a-zA-Z\s]*$/,
                msg: "Color name can only contain letters."
            }
        }
    },
}, {
    timestamps: false
})

module.exports = Color;