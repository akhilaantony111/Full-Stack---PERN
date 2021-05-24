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
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductsList = exports.getProduct = void 0;
const services_1 = __importDefault(require("../services"));
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield services_1.default.getProduct(req);
    res.status(product.status).json(product);
});
exports.getProduct = getProduct;
const getProductsList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield services_1.default.getProducts(req);
    res.status(products.status).json(products);
});
exports.getProductsList = getProductsList;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield services_1.default.addProduct(req);
    res.status(newProduct.status).json(newProduct);
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield services_1.default.updateProduct(req);
    res.status(updatedProduct.status).json(updatedProduct);
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield services_1.default.deleteProduct(req);
    res.status(deletedProduct.status).json(deletedProduct);
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.controller.js.map