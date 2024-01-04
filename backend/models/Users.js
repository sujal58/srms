const db = require("../config/db.js");
const { DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "others"),
    },
  },
  {
    tableName: "student_data",
    timestamps: true,
  }
);

module.exports = User;
