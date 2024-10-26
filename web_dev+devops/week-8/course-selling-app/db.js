const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    email: {type: String, unique: true}
});

const Admin = new Schema({
    username: String,
    password: String
});

const Courses = new Schema({
    title: String,
    description: String,
    price: Number
});

const AdminModel = mongoose.model('admins', Admin);
const UserModel = mongoose.model('users', User);
const CourseModel = mongoose.model('courses', Courses);

module.exports = {
    UserModel,
    AdminModel,
    CourseModel
};