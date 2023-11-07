const express = require('express');
const app = express();
const urlprefix = '/api';
const mongoose = require('mongoose');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
  server: { sslCA: cert },
};
const connstring = 'mongodb+srv://shaleenkalan:24Wood2424@cluster0.m9czevt.mongodb.net/POEDatabase';
 
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
 
// Connect to MongoDB(IIE Varsity College, 2021)
mongoose.connect(connstring)
  .then(() => {
    console.log('Connected :-)');
  })
  .catch(() => {
    console.log('Not Connected :-(');
  }, options);
 
// Middleware to parse JSON request bodies
app.use(express.json());
 
// Middleware for handling CORS (Cross-Origin Resource Sharing) (IIE Varsity College, 2021)
app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});
 
// Route to test the server
app.get(urlprefix + '/', (req, res) => {
  res.send('hello world');
});
 
// Use the postRoutes and userRoutes for specific API endpoints(IIE Varsity College, 2021)
app.use(urlprefix + '/posts', postRoutes);
app.use(urlprefix + '/users', userRoutes);
 
module.exports = app;
 