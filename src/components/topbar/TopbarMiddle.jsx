import { BsCart2 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import SearchBar from "./SearchBar";
import style from "./styles/TopbarMiddle.module.css";

export default function TopbarMiddle() {
    const { qty } = useProducts();

    return (
        <div className={style.top}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.logo}>
                        <h4>Brand.</h4>
                    </div>
                    <div className={style.search}>
                        <SearchBar />
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
