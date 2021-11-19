function Display(props) {
    return (
        <div className="displayContainer">
            <div className="output">{props.display}</div>
            <div className="input">{props.input}</div>

        </div>
    );
}

export default Display;