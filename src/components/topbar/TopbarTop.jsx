import { RiAccountCircleLine } from "react-icons/ri";
import style from "./styles/TopbarTop.module.css";

export default function TopbarTop() {
    return (
        <div className={style.top}>
            <div className="container">
                <div className={style.main}>
                    <div className={style.logo}>
                        <h4>Brand.</h4>
                    </div>
                    <div className={style.search}>
                        <div>
                            <input placeholder="Search..." type="text" />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className={style.right}>
                        <button>
                            <RiAccountCircleLine size={40} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
