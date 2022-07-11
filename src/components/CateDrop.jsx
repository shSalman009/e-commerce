import { useState } from "react";
import bottom from "../images/bottom-arrow.png";
import style from "../styles/CateDrop.module.css";

export default function CateDrop() {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={style.main}>
            <div className={style.categorie}>
                <span>categorie</span>
                <div className={style.iconWrapper} onClick={handleShow}>
                    <img src={bottom} alt="" />
                </div>
                <ul
                    style={{
                        transform: `${
                            show ? "translateY(0px)" : "translateY(-15px)"
                        }`,
                        opacity: `${show ? "1" : "0"}`,
                        visibility: `${show ? "visible" : "hidden"}`,
                    }}
                >
                    <li>
                        <a href="#">All Products</a>
                    </li>
                    <li>
                        <a href="#">New Products</a>
                    </li>

                    <li>
                        <a href="#">Women's Fashion</a>
                    </li>
                    <li>
                        <a href="#">Mens Fashion</a>
                    </li>
                    <li>
                        <a href="#">Shoes</a>
                    </li>
                    <li>
                        <a href="#">Watches</a>
                    </li>
                    <li>
                        <a href="#">T-Shirt</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
