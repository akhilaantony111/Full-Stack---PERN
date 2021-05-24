//Fast, unopinionated, minimalist web framework for node. 
const express = require('express'); 
//By using cors we can communicate woth different applications.
const cors = require('cors'); 
const app = express();
import router from "./routes";

// parse application/x-www-form-urlencoded
app.use(express.json())

//middleware
app.use(cors());
app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads')); 
app.use("/api", router);

app.listen(5000, ()=>{
    console.log("Server listening on port 5000");
})