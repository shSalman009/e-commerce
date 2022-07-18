import React from "react";
import styles from "./styles/SearchBar.module.css";

export default function SearchBar({ search, handleSearch }) {
    return (
        <div className={styles.main}>
            <input
                value={search}
                onChange={handleSearch}
                placeholder="Search..."
                type="search"
            />
            <button>Search</button>
        </div>
    );
}
