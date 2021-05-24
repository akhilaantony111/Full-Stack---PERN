"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = __importDefault(require("../controllers"));
var multer = require('multer');
// var upload = multer({ storage: 'uploads/' })
const storage = multer.diskStorage({
    destination: 'uploads/',
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
    }
});
const router = express_1.default.Router();
router.get("/products/:id", controllers_1.default.getProduct);
router.get("/products", controllers_1.default.getProductsList);
router.post("/products", multer({ storage: storage }).single('myFile'), controllers_1.default.addProduct);
router.put("/products/:id", multer({ storage: storage }).single('myFile'), controllers_1.default.updateProduct);
router.delete("/products/:id", controllers_1.default.deleteProduct);
exports.productsRoutes = router;
//# sourceMappingURL=products.route.js.map