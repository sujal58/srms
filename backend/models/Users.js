const db = require("../config/db.js");
const { dataTypes, DataTypes } = require("sequelize");

const User = db.define(
  "User",
  {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    phonenumber: {
      type: dataTypes.INTEGER,
    },
  },
  {
    tableName: "student_data",
    timestamps: true,
  }
);
