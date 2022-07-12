import { useProducts } from "../lib/GetProducts";
import styles from "../styles/Alerts.module.css";

export default function Alerts() {
    const { addAlert, removeAlert, changeAlert, removeAllALert } =
        useProducts();

    return (
        <div className={styles.alertWrapper}>
            {addAlert && <p>Add Item in Cart Successfully!</p>}
            {removeAlert && <p>Remove Item from Cart Successfully!</p>}
            {changeAlert && <p>Remove Products Successfully!</p>}
            {removeAllALert && <p>Removed All Items from Cart successfully!</p>}
        </div>
    );
}
