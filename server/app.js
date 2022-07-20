//import the modules from the installed dependencies
const express = require('express');
const app = express();
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { response } = require('express');
// dotenv.config();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

//routes below here

//create - route1
//read - route2
app.get('/' , (req,res) =>{
    res.send("Hello World");
   console.log("hello");
});
//update - route3
//delete route4

//set up local server here
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("app is running")); 