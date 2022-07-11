import React from "react";
import styles from "./styles/AllProductItem.module.css";

export default function AllProductItem({ item }) {
    return (
        <div className={styles.main}>
            <div className={styles.imgWrapper}>
                <img src={item.img[0]} alt="" />
            </div>
            <div className={styles.body}>
                <p>{item.title}</p>
                <h4>${item.price}.00</h4>
            </div>
        </div>
    );
}
