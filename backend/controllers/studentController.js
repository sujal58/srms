//@desc create user
//@route post /api/users
//@access public
const User = require("../models/Users.js");
const bcrypt = require("bcryptjs");

const createStudent = async (req, res) => {
  try {
    const existingEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    const allowedGenderValue = ["male", "female", "others"];
    const enterGenderValue = req.body.gender;
    if (!allowedGenderValue.includes(enterGenderValue.toLowerCase())) {
      return res
        .status(400)
        .json({ message: "Invalid gender. Must be male, female or others" });
    }

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exist!!" });
    }

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    if (!hashPassword) {
      return res.status(500).json({ message: "Internal server error!!" });
    }

    const newUser = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      password: hashPassword,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
    });

    if (newUser) {
      return res.status(201).json({ message: "User Created Succesfully!!" });
    } else {
      return res.status(500).json({ message: "Internal Server Error!!" });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Internal Server Error!!!" });
  }
};

const getAllStudent = async (req, res) => {
  console.log("get all user");

  try {
    const allUserDetails = await User.findAll();
    if (allUserDetails.length > 0) {
      return res
        .status(200)
        .json({ message: "User fetched successfully!!", data: allUserDetails });
    } else {
      return res.status(500).json({ message: "Internal server error!!" });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Internal Server Error!!" });
  }
};

const getStudentById = async (req, res) => {
  const userId = req.params.id;
  try {
    const searchUserDetails = await User.findOne({ where: { id: userId } });
    if (searchUserDetails) {
      res.status(200).json({
        message: "User found successfully!!",
        data: searchUserDetails,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error!!!" });
  }
};

const updateStudent = async (req, res) => {
  const userId = req.params.id;
  try {
    const existingUser = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exist!!" });
    }

    const updatedUser = await User.update(
      {
        fullname: req.body.fullname,
        email: req.body.email,
        address: req.body.address,
        mobileNumber: req.body.mobileNumber,
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    if (updatedUser) {
      return res.status(201).json({ message: "User Updated Succesfully!!" });
    } else {
      return res.status(500).json({ message: "Internal Server Error!!" });
    }
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ message: "Internal Server Error!!!" });
  }
};

const deleteStudent = async (req, res) => {
  const userToBeDeleted = req.params.id;
  try {
    const deletedUser = await User.findOne({
      where: {
        id: userToBeDeleted,
      },
    });

    if (deletedUser) {
      await deletedUser.destroy();
      res.status(200).json({
        message: `User having id ${userToBeDeleted} Deleted Successfully!!!`,
      });
    } else {
      res.status(404).json({ message: "User not found!!!!!!" });
    }
  } catch (error) {
    console.log("Error Found!!!", error);
    res.status(500).json({ message: "Internal server Error!!!!" });
  }
};

module.exports = {
  createStudent,
  getAllStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
};
