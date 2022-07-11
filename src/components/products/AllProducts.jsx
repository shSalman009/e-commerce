import { AnimatePresence, motion } from "framer-motion";
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
    console.log(product);

    useEffect(() => {
        const filtering = () => {
            setProduct([]);
            products.forEach((p) => {
                if (gender === "all") {
                    if (category === "all") {
                        setProduct((prev) => [...prev, p]);
                    }
                    if (p.type === category) {
                        setProduct((prev) => [...prev, p]);
                    }
                }
                if (gender === p.gender) {
                    if (category === "all") {
                        setProduct((prev) => [...prev, p]);
                    }
                    if (p.type === category) {
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
                <motion.div layout className={styles.products}>
                    <AnimatePresence>
                        {product.map((item) => (
                            <ALLProductItem key={item.id} item={item} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
