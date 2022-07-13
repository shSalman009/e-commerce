import React from "react";
import styles from "./styles/SearchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.main}>
            <input placeholder="Search..." type="text" />
            <button>Search</button>
        </div>
    );
}
