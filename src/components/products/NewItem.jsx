import { AiOutlineZoomIn } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../lib/GetProducts";
import style from "./styles/NewItem.module.css";

export default function NewItem({ item }) {
    const { handleCart } = useProducts();
    const navigate = useNavigate();

    return (
        <div className={style.main}>
            <span>new</span>
            <div className={style.imgwrapper}>
                <img src={item.img[0]} alt="" />

                <div className={style.addCart}>
                    <div>
                        <MdOutlineFavoriteBorder size={20} />
                    </div>
                    <div
                        onClick={() => {
                            navigate("/singleitem", { state: { item } });
                        }}
                    >
                        <AiOutlineZoomIn size={20} />
                    </div>
                    <div
                        onClick={() => {
                            handleCart(item, 1);
                        }}
                    >
                        <BsCartPlus size={20} />
                    </div>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.details}>
                    <p>{item.title}</p>
                    <h4>${item.price}.00</h4>
                </div>
            </div>
        </div>
    );
}
