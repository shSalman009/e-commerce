import { createContext, useContext, useEffect, useState } from "react";
import { products as data } from "../data";

const Context = createContext();

export const useProducts = () => {
    return useContext(Context);
};

export default function GetProducts({ children }) {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(0);

    const handleAddCart = (product, qn) => {
        setQty((prev) => prev + qn);
        const exist = cartItems.find((x) => x.id === product.id);
        // console.log(product);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + qn } : x
                )
            );
        } else {
            setCartItems((prev) => [...prev, { ...product, qty: qn }]);
        }
    };

    const handleRemoveCart = (product) => {
        setQty((prev) => prev - 1);
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };

    const removeSingleCart = (product) => {
        setQty((prev) => prev - product.qty);
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    };

    const handleClearCart = () => {
        setCartItems([]);
        setQty(0);
    };

    useEffect(() => {
        setProducts(data);
    }, []);

    return (
        <Context.Provider
            value={{
                products,
                cartItems,
                handleAddCart,
                handleRemoveCart,
                removeSingleCart,
                handleClearCart,
                qty,
            }}
        >
            {children}
        </Context.Provider>
    );
}
