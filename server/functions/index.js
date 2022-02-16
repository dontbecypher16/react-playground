
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')


app.get('/todos', getAllTodos);
app.post('/todo', postOneTodo);
app.delete('/todos/:todoId', deleteTodo);
app.put('/todos/:todoId', editTodo);

exports.api = functions.https.onRequest(app);