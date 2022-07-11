import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Checkout from "./components/payment/Checkout";
import GetProducts from "./lib/GetProducts";
import CartItemPage from "./pages/CartItemPage";
import Home from "./pages/Home";
import SingleItemPage from "./pages/SingleItemPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <GetProducts>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/singleitem"
                            element={<SingleItemPage />}
                        />
                        <Route path="/cartItem" element={<CartItemPage />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </GetProducts>
            </BrowserRouter>
        </>
    );
}
