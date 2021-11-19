import { useSelector } from "react-redux";
import Button from "./Buttons";
import Display from "./Display";


function Calculator() {
    const renderButton = (input, className) => {
        return (
            <Button input={input} type={className} />
        );
    }

    const state = useSelector(state => state);

    return (
        <div className="calculator">
            <Display input={state.userInput} display={state.displayInput}/>
            {renderButton("AC", "clear")}
            {renderButton("/", "divide")}
            {renderButton("x", "multiply")}
            {renderButton("-", "substract")}
            {renderButton("+", "add")}
            {renderButton("=", "equals")}
            {renderButton(".", "decimal")}
            {renderButton("9", "nine")}
            {renderButton("8", "eight")}
            {renderButton("7", "seven")}
            {renderButton("6", "six")}
            {renderButton("5", "five")}
            {renderButton("4", "four")}
            {renderButton("3", "three")}
            {renderButton("2", "two")}
            {renderButton("1", "one")}
            {renderButton("0", "zero")}
                
        </div>
    );
}

export default Calculator;