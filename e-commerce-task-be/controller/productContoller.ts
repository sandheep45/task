import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../model/productModel";

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await ProductModel.find();
  res.json(products);
};

const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);
  res.json(product);
};

export { getAllProducts, getSingleProduct };
