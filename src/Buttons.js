import { useDispatch } from "react-redux";

function Button(props) {
    const dispatch = useDispatch();
    let action;

    if (props.type === "clear") {
        action = () => dispatch({ type: props.type, userInput: props.input });
    } else if (props.type === "equals") {
        action = () => dispatch({ type: props.type });
    } else if (props.type === "divide" || props.type === "multiply" || props.type === "substract" || props.type === "add") {
        action = () => dispatch({ type: "OPERATION", userInput: props.input });
    } else {
        action = () => dispatch({ type: "INPUT", userInput: props.input });
    }

    return (
        <div
            className={props.type}
            onClick={action}
        >
            {props.input}
        </div>
    );
}

export default Button;