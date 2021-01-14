import styled from "styled-components";
import React, {useState} from "react";

const CategorySection: React.FC = () => {
    const categoryMap = {"-": "支出", "+": "收入"};
    type cType = keyof typeof categoryMap;
    const [categoryList] = useState<cType[]>(["+", "-"]);
    const [category, setCategory] = useState("-");
    return (
        <CategoryCSS>
            <ul>
                {categoryList.map(c =>
                    <li className={category === c ? "selected" : ""}
                        onClick={() => setCategory(c)}>{categoryMap[c]}
                    </li>
                )}
            </ul>
        </CategoryCSS>
    );
};
const CategoryCSS = styled.section`

  >ul{
    display: flex;
    font-size: 24px;
    
    
    background: #d6e6f2;
    >li{ 
      text-align: center;
      width: 50%;
      padding: 16px 0;
      &.selected{
          color: #f7fbfc;
          background: #769fcd;
          position: relative;
          &::after{
              content: '';
              display: block;
              height: 3px;
              background: #0f4c75;
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0;
          }
      }
    }
  }
`;

export {CategorySection};