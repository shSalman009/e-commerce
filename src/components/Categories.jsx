import { categories } from "../data";
import style from "../styles/Categories.module.css";

export default function Categories() {
    return (
        <div className={style.categories}>
            <div className="container">
                <div className={style.main}>
                    {categories.map((item) => (
                        <div key={item.id} className={style.item}>
                            <img src={item.img} alt="" />
                            {/* <h4>{item.title}</h4> */}
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Amet sequi iusto sed esse
                                cumque veniam quo? Repudiandae nisi nostrum
                                similique!
                            </p> */}
                            <button>Shop Now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
