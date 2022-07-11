import React from "react";
import styles from "./styles/Filter.module.css";

export default function Filter({
    handleFilter,
    handelGender,
    gender,
    category,
}) {
    const filterTopic = ["all", "dress", "t-shirt", "pant", "shoes", "watch"];
    const genderList = ["all", "male", "female"];

    return (
        <div className={styles.main}>
            <div className={styles.filter}>
                <ul>
                    {genderList.map((value, index) => (
                        <li
                            className={
                                value === gender ? styles.active : undefined
                            }
                            key={index}
                            onClick={() => {
                                handelGender(value);
                            }}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.filter}>
                <ul>
                    {filterTopic.map((value, index) => (
                        <li
                            className={
                                value === category ? styles.active : undefined
                            }
                            key={index}
                            onClick={() => {
                                handleFilter(value);
                            }}
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
