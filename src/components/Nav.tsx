import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


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
                    <Icon name="tag"/>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Icon name="record"/>
                    <Link to="/record">记账</Link>
                </li>
                <li>
                    <Icon name="stat"/>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;