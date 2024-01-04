const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

//mentioning route for every operation
router.route("/").get(getAllStudent);
router.route("/").post(createStudent);
router.route("/:id").get(getStudentById);
router.route("/:id").put(updateStudent);
router.route("/:id").delete(deleteStudent);

//exporting routes to index page
module.exports = router;
