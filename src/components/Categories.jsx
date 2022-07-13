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
                            <div>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
