import { BsCart2 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import CateDrop from "../CateDrop";
import style from "./styles/TopbarBottom.module.css";

export default function TopbarBottom() {
    const { qty } = useProducts();
    return (
        <div className={style.navbar}>
            <div className="container">
                <div className={style.main}>
                    <CateDrop />
                    <div className={style.left}>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                            <li>
                                <a href="#">produt</a>
                            </li>
                            <li>
                                <a href="#">Page</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.right}>
                        <div>
                            <span>0</span>
                            <MdOutlineFavoriteBorder size={30} />
                        </div>
                        <Link to="/cartitem">
                            <div>
                                <span>{qty}</span>
                                <BsCart2 size={30} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
