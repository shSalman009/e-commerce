import { useEffect, useState } from "react";
import { useProducts } from "../../lib/GetProducts";
import CartDetails from "./CartDetails";
import CartItem from "./CartItem";
import styles from "./styles/CartPage.module.css";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);

  const { cartItems, handleClearCart } = useProducts();

  useEffect(() => {
    setTotalPrice(cartItems.reduce((a, b) => a + b.price * b.qty, 0));
  }, [cartItems]);

  return (
    <div className={styles.cartItem}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.cartItems}>
            <div className={styles.head}>
              <h3>Shopping Cart</h3>
            </div>

            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className={styles.notFound}>
                <h4>Empty Cart</h4>
              </div>
            )}

            <div className={styles.updateButton}>
              <button
                onClick={handleClearCart}
                disabled={cartItems && cartItems.length > 0 ? false : true}
                className={cartItems <= 0 ? "disableButton" : "btn"}
              >
                remove all
              </button>
            </div>
          </div>
          <CartDetails totalPrice={totalPrice} cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}
