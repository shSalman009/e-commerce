import React from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
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
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
