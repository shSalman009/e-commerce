import style from "../styles/DateDisplay.module.css";

const DateTimeDisplay = ({ value, type }) => {
    return (
        <div className={style.countdown}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DateTimeDisplay;
