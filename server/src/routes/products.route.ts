import express from "express";
import productsController from "../controllers";

var multer  = require('multer');
// var upload = multer({ storage: 'uploads/' })
const storage = multer.diskStorage({
    destination: 'uploads/',
    // By default, multer removes file extensions so let's add them back
    filename: function(req: any, file: any, cb: any) {
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
    }
});


const router = express.Router();

router.get("/products/:id", productsController.getProduct);

router.get("/products", productsController.getProductsList);

router.post("/products", multer({storage: storage}).single('myFile'), productsController.addProduct);

router.put("/products/:id", multer({storage: storage}).single('myFile'), productsController.updateProduct);

router.delete("/products/:id", productsController.deleteProduct);


export const productsRoutes = router;

