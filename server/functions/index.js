const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/todos')

const {
    loginUser
} = require('./APIs/users')




app.get('/todos', getAllTodos);
app.post('/todos', postOneTodo);
app.delete('/todos/:todoId', deleteTodo);
app.put('/todos/:todoId', editTodo);

app.post('/login', loginUser)

exports.api = functions.https.onRequest(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUwS6t2efNo546oW_LiAw-KtI49x8a7Xk",
//   authDomain: "todo-5a124.firebaseapp.com",
//   projectId: "todo-5a124",
//   storageBucket: "todo-5a124.appspot.com",
//   messagingSenderId: "595590741678",
//   appId: "1:595590741678:web:88054ec07200e4d69f373f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);