var express = require('express');
var bodyparser = require('body-parser');
//import contact.js 
var contact = require('./contact');
var users = require('./users');
var app = express();
//define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
const ROUTE = "/contact";
const USER = "/user"
//use Post Method to insert new contact 
//input : email,mobile,name,detail
//all input is required
app.post(ROUTE, (request, response) => contact.insert(request, response));

//http://localhost:5000/contact
//fetch all contacts 

// fetch all contact whose email is abc
//http://localhost:5000/contact?email=abc

//http://localhost:5000/contact?id=1
// fetch all contact whose id = 1
app.get(ROUTE, (request, response) => contact.select(request, response));

//delete specific contact 
//input : email (required)
app.delete(ROUTE, (request, response) => contact.remove(request, response));

//update specific contact
//input : email, mobile, name, detail
app.put(ROUTE, (request, response) => contact.update(request, response));

//users 
app.post(USER, (request, response) => users.insert(request, response));
//change password
//input: current_password,new_password,id
app.put(USER, (request, response) => users.update(request, response));
//login
//input : email, password
app.get(USER, (request, response) => users.select(request, response));
//forgot password 
//input : email;
app.delete(USER, (request, response) => users.select(request, response));
app.listen(5000);
console.log('ready to accept request');