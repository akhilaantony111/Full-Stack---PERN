"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProducts = exports.getProduct = void 0;
const data_1 = __importDefault(require("../data"));
const getProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield data_1.default.getSpecificProduct(parseInt(id));
        return ({ status: 200, message: "Success", data: product.rows[0] });
    }
    catch (err) {
        return ({ status: 500, message: err.message });
    }
});
exports.getProduct = getProduct;
const getProducts = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, page, limit } = req.query;
        limit = parseInt(limit);
        page = parseInt(page);
        const offset = (page - 1) * limit;
        const count = yield data_1.default.getProductCount();
        const products = yield data_1.default.getProducts(name, offset, limit);
        let totalCount = name ? products.rows.length : parseInt(count.rows[0].count);
        return {
            status: 200,
            message: "Success!",
            totalCount: totalCount,
            totalPages: Math.ceil(totalCount / parseInt(limit)),
            data: products.rows,
        };
    }
    catch (err) {
        return {
            status: 500,
            message: err.message
        };
    }
});
exports.getProducts = getProducts;
const addProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let params = JSON.parse(req.body.params);
    let imgPath = '';
    if (req === null || req === void 0 ? void 0 : req.file) {
        let { path } = req.file;
        imgPath = 'http://127.0.0.1:5000/' + path;
    }
    try {
        const { name, description, quantity, price } = params;
        // RETURNING * is to return the data which is added
        const newProduct = yield data_1.default.addProduct(name, description, quantity, price, imgPath);
        // // Data will be inside rows
        return {
            status: 200,
            message: "Success",
            data: newProduct.rows
        };
    }
    catch (err) {
        return { status: 500, message: err.message };
    }
});
exports.addProduct = addProduct;
const updateProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    let params = JSON.parse(req.body.params);
    let imgPath = '';
    if (req === null || req === void 0 ? void 0 : req.file) {
        let { path } = req.file;
        imgPath = 'http://127.0.0.1:5000/' + path;
    }
    else {
        imgPath = req.body.myFile;
    }
    try {
        const { id } = req.params;
        const { name, description, quantity, price } = params;
        const updateProduct = yield data_1.default.updateProduct(name, description, quantity, price, imgPath, id);
        return { status: 200, message: "Success", data: updateProduct };
    }
    catch (err) {
        return { status: 500, message: err.message };
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleteProduct = yield data_1.default.deleteProduct(id);
        return { status: 200, message: "Success" };
    }
    catch (err) {
        return { status: 500, message: err.message };
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.services.js.map