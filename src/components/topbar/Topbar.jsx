import React from "react";
import styles from "./styles/Topbar.module.css";
import TopbarBottom from "./TopbarBottom";
import TopbarTop from "./TopbarTop";

export default function Topbar() {
    return (
        <div className={styles.main}>
            <TopbarTop />
            <TopbarBottom />
        </div>
    );
}
