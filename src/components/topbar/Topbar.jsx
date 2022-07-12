import React, { useEffect, useState } from "react";
import styles from "./styles/Topbar.module.css";
import TopbarBottom from "./TopbarBottom";
import TopbarTop from "./TopbarTop";

export default function Topbar() {
    const [show, setShow] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollPosition(document.body.getBoundingClientRect().top);
            setShow(document.body.getBoundingClientRect().top > scrollPosition);
        });
    }, [scrollPosition, show]);

    return (
        <div className={`${styles.main} ${show ? styles.hidden : styles.show}`}>
            <TopbarTop />
            <TopbarBottom />
        </div>
    );
}
