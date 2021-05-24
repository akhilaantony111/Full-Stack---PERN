"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Fast, unopinionated, minimalist web framework for node. 
const express = require('express');
//By using cors we can communicate woth different applications.
const cors = require('cors');
const app = express();
const routes_1 = __importDefault(require("./routes"));
// parse application/x-www-form-urlencoded
app.use(express.json());
//middleware
app.use(cors());
app.use(express.static('uploads'));
app.use('/uploads', express.static('uploads'));
app.use("/api", routes_1.default);
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
//# sourceMappingURL=app.js.map