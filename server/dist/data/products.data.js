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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProducts = exports.getProductCount = exports.getSpecificProduct = void 0;
const pool = require('./db');
const getSpecificProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("SELECT * FROM products WHERE prod_id = $1", [id]);
});
exports.getSpecificProduct = getSpecificProduct;
const getProductCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("SELECT COUNT(*) FROM products");
});
exports.getProductCount = getProductCount;
const getProducts = (name, offset, limit) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("SELECT * FROM products WHERE LOWER(name) LIKE LOWER($3) LIMIT $1 OFFSET $2", [limit, offset, `%${name}%`]);
});
exports.getProducts = getProducts;
const addProduct = (name, description, quantity, price, imgPath) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("INSERT INTO products (name, description, quantity, price, image) VALUES($1,$2, $3, $4, $5) RETURNING * ", [name, description, quantity, price, imgPath]);
});
exports.addProduct = addProduct;
const updateProduct = (name, description, quantity, price, imgPath, id) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("UPDATE products SET name = $1, description = $2, quantity = $3, price = $4, image = $5 WHERE prod_id = $6", [name, description, quantity, price, imgPath, id]);
});
exports.updateProduct = updateProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return pool.query("DELETE FROM products WHERE prod_id = $1", [id]);
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.data.js.map