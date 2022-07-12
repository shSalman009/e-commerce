import { useEffect, useState } from "react";
import NewItem from "./NewItem";
import style from "./styles/NewProduct.module.css";

export default function NewProduct({ products }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(products);
    }, [products]);
    return (
        <div className="container">
            <div className={style.main}>
                <h2>New Arrivals</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex, natus?
                </p>
                <div className={style.products}>
                    {items.map((item) => (
                        <NewItem isNew={true} key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
