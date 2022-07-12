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

    const [addAlert, setAddAlert] = useState(false);
    const [removeAlert, setRemoveAlert] = useState(false);
    const [changeAlert, setChangeAlert] = useState(false);
    const [removeAllALert, setRemoveAllALert] = useState(false);

    const handleAddCart = (product, qn) => {
        setQty((prev) => prev + qn);
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + qn } : x
                )
            );
        } else {
            setCartItems((prev) => [...prev, { ...product, qty: qn }]);
        }
        setAddAlert(false);
        setRemoveAlert(false);
        setChangeAlert(false);
        setRemoveAllALert(false);
        setAddAlert(true);
        setTimeout(() => {
            setAddAlert(false);
        }, 3000);
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
        setAddAlert(false);
        setRemoveAlert(false);
        setChangeAlert(false);
        setRemoveAllALert(false);
        setRemoveAlert(true);
        setTimeout(() => {
            setRemoveAlert(false);
        }, 3000);
    };

    const removeSingleCart = (product) => {
        setQty((prev) => prev - product.qty);
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        setAddAlert(false);
        setRemoveAlert(false);
        setChangeAlert(false);
        setRemoveAllALert(false);
        setChangeAlert(true);
        setTimeout(() => {
            setChangeAlert(false);
        }, 3000);
    };

    const handleClearCart = () => {
        setCartItems([]);
        setQty(0);
        setAddAlert(false);
        setRemoveAlert(false);
        setChangeAlert(false);
        setRemoveAllALert(false);
        setRemoveAllALert(true);
        setTimeout(() => {
            setRemoveAllALert(false);
        }, 3000);
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
                addAlert,
                removeAlert,
                changeAlert,
                removeAllALert,
            }}
        >
            {children}
        </Context.Provider>
    );
}
