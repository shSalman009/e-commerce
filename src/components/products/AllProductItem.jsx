import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/AllProductItem.module.css";

export default function AllProductItem({ item }) {
    const navigate = useNavigate();

    return (
        <motion.div
            onClick={() => {
                navigate("/singleitem", { state: { item } });
            }}
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className={styles.main}
        >
            <div className={styles.imgWrapper}>
                <img src={item.img[0]} alt="" />
            </div>
            <div className={styles.body}>
                <p>{item.title}</p>
                <h4>${item.price}.00</h4>
            </div>
        </motion.div>
    );
}
