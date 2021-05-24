"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_route_1 = require("./products.route");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use("/", products_route_1.productsRoutes);
exports.default = router;
//# sourceMappingURL=index.js.map