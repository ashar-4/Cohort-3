const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
})

const todoSchema = new Schema({
    userId: {type: ObjectId, ref: 'users'},
    title: String,
    done: Boolean
})

const UserModel = mongoose.model('users', userSchema);
const TodoModel = mongoose.model('todos', todoSchema);

module.exports = {
    UserModel,
    TodoModel
};