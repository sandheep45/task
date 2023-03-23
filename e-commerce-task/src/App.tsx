import { Routes, Route } from "react-router-dom";
import Index from "./pages";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import OrderConfirm from "./pages/OrderConfirm";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Routes>
      <Route element={<Index />}>
        <Route index element={<AllProducts />} />
        <Route
          path="/product/:id"
          element={<SingleProduct />}
          errorElement={<span>Error</span>}
        />
        <Route path="/order" element={<OrderConfirm />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
