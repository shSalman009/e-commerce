import x from "../images/X.png";
import { useProducts } from "../lib/GetProducts";
import styles from "../styles/CartItem.module.css";

export default function CartItem({ item }) {
    const { handleAddCart, handleRemoveCart, removeSingleCart } = useProducts();

    return (
        <div key={item.id} className={styles.item}>
            <div className={styles.iconWrapper}>
                <button
                    onClick={() => {
                        removeSingleCart(item);
                    }}
                >
                    <img src={x} alt="" />
                </button>
            </div>
            <div className={styles.imgWrapper}>
                <img src={item.img[0]} alt="" />
            </div>
            <div className={styles.titleWrapper}>
                <p>{item.title}</p>
            </div>

            <div className={styles.priceWrapper}>
                <p>${item.price}.00</p>
            </div>

            <div className={styles.qtyWrapper}>
                <div className={styles.qtyButtons}>
                    <button
                        onClick={() => {
                            handleRemoveCart(item);
                        }}
                    >
                        -
                    </button>
                    <button>{item.qty}</button>
                    <button
                        onClick={() => {
                            handleAddCart(item, 1);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className={styles.subTotalWrapper}>
                <h4>${item.price * item.qty}.00</h4>
            </div>
        </div>
    );
}
