import React, {useState} from "react";
import {CategoryCSS} from "./CategoryCSS";
import styled from "styled-components";
import Icon from "../../../components/Icon";
import {Link} from "react-router-dom";

const Back = styled.button`
  position: absolute;
  top: 20px;
  left: 10px;
  background: #d6e6f2;
  border: none;
  
`;
type Props = {
    value: "-" | "+",
    onChange: (value: "-" | "+") => void,
}
const CategorySection: React.FC<Props> = (props) => {
    const category = props.value;
    const categoryMap = {"-": "支出", "+": "收入"};
    type cType = keyof typeof categoryMap;
    const [categoryList] = useState<cType[]>(["-", "+"]);
    return (
        <CategoryCSS>
            <ul>

                {categoryList.map(c =>
                    <li className={category === c ? "selected" : ""} key={c}
                        onClick={() => props.onChange(c)}>{categoryMap[c]}
                    </li>
                )}
            </ul>
            <Back><Link to="/statistics"><Icon name="left"></Icon></Link></Back>

        </CategoryCSS>
    );
};


export {CategorySection};