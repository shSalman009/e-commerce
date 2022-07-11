import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useProducts } from "../../lib/GetProducts";
import OrderSummery from "./OrderSummery";
import PaymentForm from "./PaymentForm";

const public_key =
    "pk_test_51LFGfDGqEDTY6FrLongWxUtqhFbsxgXoEa59qC6gEZqHE9fzvx9mKm81CtedR6EtSME5FO2VdfcRpdZh6puKdqQL00ZfolWhs5";
const stripePromise = loadStripe(public_key);

export default function Stripe() {
    const [total, setTotal] = useState(0);
    const { cartItems, handleClearCart } = useProducts();

    useEffect(() => {
        setTotal(0);
        cartItems &&
            cartItems.forEach((item) => {
                setTotal((prev) => prev + item.price);
            });
    }, [cartItems]);

    return (
        <>
            <OrderSummery cartItems={cartItems} total={total} />

            <Elements stripe={stripePromise}>
                <PaymentForm total={total} handleClearCart={handleClearCart} />
            </Elements>
        </>
    );
}
