import React from "react";
import ALLProductItem from "./AllProductItem";
import Filter from "./Filter";
import styles from "./styles/AllProlduct.module.css";

export default function AllProducts({ products }) {
    return (
        <div className="container">
            <div className={styles.main}>
                <div className={styles.head}>
                    <h2>For You</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Beatae, voluptatibus?
                    </p>
                </div>
                <Filter />
                <div className={styles.products}>
                    {products &&
                        products.map((item) => (
                            <ALLProductItem key={item.id} item={item} />
                        ))}
                </div>
            </div>
        </div>
    );
}
