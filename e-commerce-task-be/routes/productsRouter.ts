import express from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controller/productContoller";

const productRouter = express.Router();

productRouter.get("/all-products", getAllProducts);
productRouter.get("/product/:id", getSingleProduct);
productRouter.get("/cart");
productRouter.get("/checkout");

export default productRouter;
