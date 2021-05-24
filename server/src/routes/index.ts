import { productsRoutes } from './products.route';
import express from "express";

const router = express.Router();
router.use("/", productsRoutes);

export default router;
