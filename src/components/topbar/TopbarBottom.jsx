import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbAlignLeft } from "react-icons/tb";
import CateDrop from "./CateDrop";
import SearchBar from "./SearchBar";
import style from "./styles/TopbarBottom.module.css";

export default function TopbarBottom() {
    const [resOne, setResOne] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(resOne ? false : true);

    useEffect(() => {
        window
            .matchMedia("(max-width: 768px)")
            .addEventListener("change", (e) => setResOne(e.matches));
        window.addEventListener("resize", () => {
            setShowTwo(resOne ? false : true);
        });
    }, [resOne]);

    return (
        <div className={style.navbar}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.nav}>
                        <ul className={showTwo ? style.block : style.none}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li
                                onClick={() => {
                                    setShow(!show);
                                }}
                            >
                                Categories
                                <div
                                    className={show ? style.block : style.none}
                                >
                                    <CateDrop />
                                </div>
                                <IoIosArrowDown />
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.smallDevice}>
                        <TbAlignLeft
                            size={30}
                            onClick={() => {
                                setShowTwo(!showTwo);
                            }}
                        />
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    );
}
