import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "../lib/GetProducts";
import style from "../styles/SingleItem.module.css";

export default function SingleItem() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");

    const [cartItem, setCartItem] = useState(0);

    const [selectSize, setSelectSize] = useState(null);
    const [selectColor, setSelectColor] = useState(null);

    const { state } = useLocation();
    const { item } = state;

    const { handleAddCart } = useProducts();

    const handleDecrement = () => {
        if (cartItem > 0) {
            setCartItem((prev) => prev - 1);
        }
    };
    const handleIncrement = () => {
        if (cartItem < 10) {
            setCartItem((prev) => prev + 1);
        }
    };

    const handleSize = (e) => {
        e.target.style.border = "2px solid tomato";
        setSelectSize(e.target);
        if (selectSize) {
            selectSize.style.border = "1px solid #777777";
        }
    };

    const handleColor = (e) => {
        e.target.style.border = "3px solid tomato";
        setSelectColor(e.target);
        if (selectColor) {
            selectColor.style.border = "2px solid black";
        }
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <div className="container">
            <div className={style.singleItem}>
                <div className={style.left}>
                    <Swiper
                        style={{
                            "--swiper-pagination-color": "#fff",
                            marginBottom: "20px",
                        }}
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper2"
                    >
                        {item.img.map((e, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div
                                        onMouseMove={(e) => {
                                            handleMouseMove(e);
                                        }}
                                        style={{
                                            backgroundImage: `url(${e})`,
                                            backgroundPosition,
                                        }}
                                        className={style.mainImg}
                                    >
                                        <img src={e} alt="" />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {item.img.map((e, i) => (
                            <SwiperSlide key={i} style={{ cursor: "pointer" }}>
                                <img src={e} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={style.right}>
                    <h4 className={style.title}>{item.title}</h4>
                    <h4 className={style.price}>Price : ${item.price}.00</h4>
                    {item.color.length > 0 && (
                        <div className={style.colors}>
                            <h4>Availible Color</h4>
                            <div>
                                {item.color.map((e, i) => (
                                    <p
                                        onClick={handleColor}
                                        key={i}
                                        style={{ background: e }}
                                    ></p>
                                ))}
                            </div>
                        </div>
                    )}
                    {item.size.length > 0 && (
                        <div className={style.sizes}>
                            <h4>Availible Sizes</h4>
                            <div>
                                {item.size.map((e, i) => (
                                    <div onClick={handleSize} key={i}>
                                        {e}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={style.addToCart}>
                        <div className={style.counter}>
                            <button onClick={handleDecrement}>-</button>
                            <button>{cartItem}</button>
                            <button onClick={handleIncrement}>+</button>
                        </div>
                        <button
                            className={cartItem <= 0 ? "disableButton" : "btn"}
                            onClick={() => {
                                handleAddCart(item, cartItem);
                                setCartItem(0);
                            }}
                        >
                            add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
