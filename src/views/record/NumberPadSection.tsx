import styled from "styled-components";
import React, {useState} from "react";

const NumberPadSection: React.FC = () => {
    const [output, _setOutput] = useState("0");
    const setOutput = (output: string) => {
        // 最多16位
        if (output.length >= 16) {
            output = output.slice(0, 16);
        } else if (output.length === 0) {
            output = "0";
        }
        _setOutput(output);

    };
    const clickNumber = (e: React.MouseEvent) => {
        const val = (e.target as HTMLButtonElement).textContent;
        if (val === null) {
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

const NumberPadCSS = styled.section`
  
  > .output{
    background: #F7FBFC;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.12);
  }
  > .pad{
    
    >button{
   
      
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok{
          float: right;
          height: 128px;
      }
      &.zero{
        width: 50%;
      }
      &:first-child{
          background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background: #d3d3d3;
      }
       &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
      background: #bbbbbb;
      
      }
      &:nth-child(12){
        background: #9a9a9a;
      }
      &:nth-child(14){
      background: #a9a9a9;
      }
    } 
  }
`;

export default NumberPadSection;