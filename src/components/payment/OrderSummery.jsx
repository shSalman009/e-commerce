import styles from "./styles/OrderSummery.module.css";

export default function OrderSummery({ cartItems, total }) {
    return (
        <div className={styles.summery}>
            <h4>Order Summery</h4>
            <div className={styles.orders}>
                {cartItems.map((item) => (
                    <div key={item.id} className={styles.order}>
                        <div>
                            <p>{item.type}</p>
                            <span>Quantity : {item.qty}</span>
                        </div>
                        <h4>${item.price}.00</h4>
                    </div>
                ))}
                <div className={styles.total}>
                    <h4>Total</h4>
                    <h4>${total}.00</h4>
                </div>
            </div>
        </div>
    );
}
