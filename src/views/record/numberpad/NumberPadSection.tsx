import React from "react";
import {NumberPadCSS} from "./NumberPadCSS";

type Props = {
    value: number,
    onChange: (value: number) => void,
    onOk?: () => void;
}
const NumberPadSection: React.FC<Props> = (props) => {
    const output = props.value.toString();
    const setOutput = (output: string) => {
        let value;
        // 限制最多16位
        if (output.length >= 16) {
            value = parseFloat(output.slice(0, 16));
        } else if (output.length === 0) {
            value = 0;
        } else {
            value = parseFloat(output);
        }
        props.onChange(value);
    };
    const clickNumber = (e: React.MouseEvent) => {
        const val = (e.target as HTMLButtonElement).textContent;
        if (val === null) {
            return;
        }
        if (val === "ok") {
            if (props.onOk) {
                props.onOk();
            }
            return;
        }
        switch (val) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if (output === "0") {
                    setOutput(val);
                } else {
                    setOutput(output + val);
                }
                break;
            case ".":
                if (output.indexOf(".") >= 0) {
                    return;
                }
                setOutput(output + ".");
                break;
            case "删除":
                if (output.length === 1) {
                    setOutput("0");
                } else {
                    setOutput(output.slice(0, -1));
                }
                break;
            case "清空":
                setOutput("0");
                break;


        }

    };
    return (
        <NumberPadCSS>
            <div className="output">{output}</div>
            <div className="pad claerfix" onClick={clickNumber}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </NumberPadCSS>
    );
};


export default NumberPadSection;