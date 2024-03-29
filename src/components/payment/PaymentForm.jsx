import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/PaymentForm.module.css";

export default function PaymentForm({ back, total, handleClearCart }) {
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#fff",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#fce883" },
        "::placeholder": { color: "#87bbfd" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "#ffc7ee",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        setSuccess(true);
        handleClearCart();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.FormGroup}>
            <CardElement options={CARD_OPTIONS} />
          </div>
          <div className={styles.buttons}>
            <button onClick={back} className="btn" type="button">
              Back
            </button>

            <button className="btn" type="submit">
              Pay ${total}.00
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.success}>
          <h2>BUY SUCCESSFULLY DONE</h2>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btn"
          >
            Go Back Home
          </button>
        </div>
      )}
    </div>
  );
}
