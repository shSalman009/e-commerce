import { useState } from "react";
import Stripe from "./Stripe";
import styles from "./styles/Checkout.module.css";
import UserForm from "./UserForm";

export default function Checkout() {
    const [goNext, setGoNext] = useState(0);

    const next = () => {
        setGoNext(1);
    };
    const back = () => {
        setGoNext(0);
    };

    return (
        <div className={styles.checkout}>
            <div className={styles.head}>
                <h4>Checkout</h4>

                <div>
                    <p>User Information</p>
                    <span></span>
                    <p>Payment Details</p>
                </div>
            </div>

            {goNext === 0 ? <UserForm next={next} /> : <Stripe />}
        </div>
    );
}
