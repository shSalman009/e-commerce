import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import style from "./styles/FlashProduct.module.css";

export default function FlashProduct({ item }) {
    const { handleAddCart } = useProducts();

    return (
        <div className={style.main}>
            <Link to="/singleitem" state={{ item }}>
                <div className={style.imgwrapper}>
                    <img src={item.img[0]} alt="" />
                </div>
            </Link>
            <div className={style.content}>
                <div className={style.title}>
                    <Link to="/singleitem" state={{ item }}>
                        <p>{item.title}</p>
                    </Link>
                </div>
                <div className={style.price}>
                    <h4>
                        ${((100 - Number(item.discount)) / 100) * item.price}
                        .00
                    </h4>
                    <div>
                        <h4>${item.price}.00</h4>
                        <h4>- {item.discount}%</h4>
                    </div>
                </div>
                <div className={style.addCart}>
                    <button
                        onClick={() => {
                            handleAddCart(item, 1);
                        }}
                    >
                        Add to cart
                    </button>
                    <div>
                        <MdOutlineFavoriteBorder />
                    </div>
                </div>
            </div>
        </div>
    );
}
