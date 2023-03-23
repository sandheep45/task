import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from "../routes/productsRouter";
// import { products } from "../seeder/productSeed";

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(productRouter);

const port: number = 3001;

mongoose
  .connect(
    "mongodb+srv://admin:QEkjW1AHrVKE9bOu@cluster0.0v9bi.mongodb.net/task-e-commerce?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, function () {
      console.log(`App is listening on port ${port} !`);
    });
  });

mongoose.connection.on("connected", async () => {
  // seeding mongodb
  // products.forEach(async (product) => {
  //   await product.save();
  // });
  console.log("Server is connected to mongoDB successfully");
});
