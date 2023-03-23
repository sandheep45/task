import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoOptionsOutline } from "react-icons/io5";
import Header from "../components/Header";
import axiosInstance from "../utils/config";
import type { Products } from "../../types/product";
import Cards from "../components/Cards";

const AllProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get("/all-products");
      setProducts(data);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-7 h-full">
      <Header />
      <div className="flex flex-col gap-5 h-full">
        <div className="flex gap-5 w-full px-6">
          <div className="relative w-full">
            <AiOutlineSearch className="text-[#ff5877] absolute scale-[1.3] top-4 left-2" />
            <input
              type="text"
              placeholder="search items"
              className="outline-none rounded-md px-8 py-2 w-full"
            />
          </div>
          <div className="flex items-center gap-8">
            <span className="min-w-fit text-[#ff5877]">
              {products.length} items
            </span>
            <RxHamburgerMenu className="scale-[2] text-[#ff5877]" />
            <IoOptionsOutline className="scale-[2] text-[#ff5877]" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-4 h-full px-4">
          {products.map((product, index) => (
            <Cards
              index={index}
              price={product.price}
              title={product.title}
              _id={product._id}
              description={product.description}
              imageUrl={product.imageUrl}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
