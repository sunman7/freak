import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require("../icons/record.svg");
require("../icons/tag.svg");
require("../icons/stat.svg");

const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
  display: flex;
  >li{
     width:33.33%;
     text-align: center;
     padding: 4px 0;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
  }
}
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#tag" />
                    </svg>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#record" />
                    </svg>
                    <Link to="/record">记账</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#stat" />
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;