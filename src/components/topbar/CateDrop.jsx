import { useState } from "react";
import styles from "./styles/CateDrop.module.css";

export default function CateDrop() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <ul className={styles.ul}>
            <li>
                <a href="#">All Products</a>
            </li>
            <li>
                <a href="#">New Products</a>
            </li>

            <li>
                <a href="#">Women's Fashion</a>
            </li>
            <li>
                <a href="#">Mens Fashion</a>
            </li>
            <li>
                <a href="#">Shoes</a>
            </li>
            <li>
                <a href="#">Watches</a>
            </li>
            <li>
                <a href="#">T-Shirt</a>
            </li>
        </ul>
    );
}
