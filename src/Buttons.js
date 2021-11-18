function Button(props) {
    return (
        <div
            className={props.className}
        >
            {props.name}
        </div>
    );
}

export default Button;