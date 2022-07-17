import { BsCart2 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import SearchBar from "./SearchBar";
import style from "./styles/TopbarBottom.module.css";

export default function TopbarBottom() {
    const { qty } = useProducts();
    const navigate = useNavigate();

    return (
        <div className={style.topbarBottom}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.logo}>
                        <h4
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Brand.
                        </h4>
                    </div>
                    <div className={style.search}>
                        <SearchBar />
                    </div>
                    <div className={style.right}>
                        <div>
                            <span>0</span>
                            <MdOutlineFavoriteBorder size={30} />
                        </div>
                        <div
                            onClick={() => {
                                navigate("/cartitem");
                            }}
                        >
                            <span>{qty}</span>
                            <BsCart2 size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
