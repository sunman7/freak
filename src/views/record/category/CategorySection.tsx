import React, {useState} from "react";
import {CategoryCSS} from "./CategoryCSS";

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
        </CategoryCSS>
    );
};


export {CategorySection};