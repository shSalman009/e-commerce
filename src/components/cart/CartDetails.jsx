import { useNavigate } from "react-router-dom";
import styles from "./styles/CartDetails.module.css";

export default function CartDetails({ totalPrice, cartItems }) {
    const navigate = useNavigate();

    return (
        <div className={styles.details}>
            <div className={styles.detailsHead}>
                <h3>Cart Totals</h3>
            </div>

            <div className={styles.subtotal}>
                <h4>Subtotal</h4>
                <h4>${totalPrice}.00</h4>
            </div>
            <div className={styles.shipping}>
                <h4>Shipping</h4>
                <div className={styles.options}>
                    <div className={styles.div}>
                        <label>Free Shipping</label>
                        <input type="radio" />
                    </div>
                    <div className={styles.div}>
                        <label>Flat Rate</label>
                        <input type="radio" />
                    </div>
                    <div className={styles.div}>
                        <label>Pickup Rate</label>
                        <input type="radio" />
                    </div>
                </div>
            </div>
            <div className={styles.total}>
                <h4>Total</h4>
                <h4>${totalPrice}.00</h4>
            </div>
            <div className={styles.subButton}>
                <button
                    onClick={() => {
                        navigate("/checkout", {
                            state: { cartItems },
                        });
                    }}
                    disabled={cartItems && cartItems.length > 0 ? false : true}
                    className={cartItems <= 0 ? "disableButton" : "btn"}
                >
                    Procced to Checkout
                </button>
            </div>
        </div>
    );
}
