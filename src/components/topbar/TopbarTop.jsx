import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./styles/TopbarTop.module.css";

export default function TopbarTop() {
    const [lang, setLang] = useState(false);
    const [cur, setCur] = useState(false);

    return (
        <div className={styles.topbarTop}>
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.left}>
                        <p>Welcome to e-commerce</p>
                    </div>
                    <div className={styles.right}>
                        <div
                            className={styles.language}
                            onClick={() => {
                                setLang(!lang);
                            }}
                        >
                            <p>Language</p>
                            <IoMdArrowDropdown />
                            <ul className={lang ? styles.block : styles.none}>
                                <li>English</li>
                                <li>Bagnla</li>
                            </ul>
                        </div>

                        <div
                            className={styles.currency}
                            onClick={() => {
                                setCur(!cur);
                            }}
                        >
                            <p>Currency</p> <IoMdArrowDropdown />
                            <ul className={cur ? styles.block : styles.none}>
                                <li>USD</li>
                                <li>EUR</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
