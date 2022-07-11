import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItems } from "../data";
import style from "../styles/Slider.module.css";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {sliderItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            style={{ background: `#${item.bg}`, width: "100%" }}
                        >
                            <div className="container">
                                <div className={style.main}>
                                    <div className={style.swiperWrapper}>
                                        {/* <div className={style.sliderImgWrapper}>
                                            <img src={item.img} alt="" />
                                        </div> */}
                                        <div
                                            className={
                                                style.sliderContentWrapper
                                            }
                                        >
                                            <h3>{item.title}</h3>

                                            <h4>{item.desc}</h4>

                                            <button>Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
