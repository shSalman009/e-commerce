import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ALLProductItem from "./AllProductItem";
import Filter from "./Filter";
import styles from "./styles/AllProlduct.module.css";

export default function AllProducts({ products }) {
    const [gender, setGender] = useState("all");
    const [category, setCategory] = useState("all");
    const [product, setProduct] = useState([]);

    const handelGender = (value) => {
        setGender(value);
    };
    const handleFilter = (value) => {
        setCategory(value);
    };

    useEffect(() => {
        const filtering = () => {
            setProduct([]);
            products.forEach((p) => {
                if (gender === p.gender) {
                    if (category === "all") {
                        setProduct((prev) => [...prev, p]);
                    }
                    if (p.type === category) {
                        setProduct((prev) => [...prev, p]);
                    }
                }
                if (gender === "all") {
                    if (p.type === category) {
                        setProduct((prev) => [...prev, p]);
                    }
                    if (category === "all") {
                        setProduct((prev) => [...prev, p]);
                    }
                }
            });
        };
        filtering();
    }, [products, gender, category]);

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
                <Filter
                    handleFilter={handleFilter}
                    handelGender={handelGender}
                    gender={gender}
                    category={category}
                />
                <div className={styles.products}>
                    {product && product.length > 0 ? (
                        <AnimatePresence>
                            {product.map((item) => (
                                <ALLProductItem key={item.id} item={item} />
                            ))}
                        </AnimatePresence>
                    ) : (
                        <div className={styles.empty}>
                            <p>This product is not availible</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
