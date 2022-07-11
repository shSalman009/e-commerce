import CountdownTimer from "../CountDownTimer";
import FlashProduct from "./FlashProduct";
import style from "./styles/Flashsales.module.css";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Flashsale({ discountProducts }) {
    // end time
    const threeDaysTime = 3 * 24 * 60 * 60 * 1000;
    const presentTime = new Date().getTime();
    const dateTimeAfterThreeDays = presentTime + threeDaysTime;

    return (
        <>
            <div className="container">
                <div className={style.main}>
                    <div className={style.header}>
                        <h2>Flashsales</h2>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolorum, obcaecati.
                        </p>
                    </div>

                    <div className={style.saleDetails}>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />

                        <button>Shop More</button>
                    </div>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {discountProducts.map((item) => (
                            <SwiperSlide key={item.id}>
                                <FlashProduct key={item.id} item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}
