import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    const [resOne, setResOne] = useState(
        window.matchMedia("(max-width: 500px)").matches
    );
    useEffect(() => {
        window
            .matchMedia("(max-width: 500px)")
            .addEventListener("change", (e) => setResOne(e.matches));
    }, []);
    return (
        <div className="container">
            <div className={styles.main}>
                <div className={styles.left}>
                    <h2>Get In Touch</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, ratione?
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightWrapper}>
                        <input type="text" placeholder="Inter your email" />
                        {resOne ? (
                            <div>
                                <BiSearch size={20} />
                            </div>
                        ) : (
                            <button>Subscribe</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
