export default function FormInputs({
    placeholder,
    value,
    onChange,
    name,
    feedback,
    type,
    list,
}) {
    const style = {
        height: "38px",
        width: "100%",
        fontSize: "16px",
        padding: "10px 10px",
        marginBottom: "0px",
    };
    return (
        <div>
            <input
                style={style}
                list={list}
                type={type}
                name={name}
                placeholder={`Enter your ${placeholder}`}
                value={value}
                onChange={onChange}
            />
            <p type="invalid">{feedback}</p>
        </div>
    );
}
