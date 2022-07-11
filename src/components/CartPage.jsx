import { useEffect, useState } from "react";
import { useProducts } from "../lib/GetProducts";
import styles from "../styles/CartPage.module.css";
import CartDetails from "./CartDetails";
import CartItem from "./CartItem";

export default function CartPage() {
    const [totalPrice, setTotalPrice] = useState(0);

    const { cartItems } = useProducts();

    useEffect(() => {
        setTotalPrice(cartItems.reduce((a, b) => a + b.price * b.qty, 0));
    }, [cartItems]);

    return (
        <div className={styles.cartItem}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.cartItems}>
                        <h3>Shopping Cart</h3>

                        {cartItems && cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        ) : (
                            <div className={styles.notFound}>
                                <h4>Cart item is not here</h4>
                            </div>
                        )}

                        <div className={styles.updateButton}>
                            <button className="btn">remove all</button>
                        </div>
                    </div>
                    <CartDetails
                        totalPrice={totalPrice}
                        cartItems={cartItems}
                    />
                </div>
            </div>
        </div>
    );
}
