import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.nav`
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
>ul{
  display: flex;
  >li{
     >a{
      display: flex;
      flex-direction: column;
     justify-content: center;
     align-items: center;
     &.selected{
        background: #000;
        .icon{
         fill:red;
        }
     }
    }
     width:33.33%;
     text-align: center;
     padding: 4px 0;
  }
}
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag"/>标签页</NavLink>
                </li>
                <li>

                    <NavLink to="/record" activeClassName="selected"> <Icon name="record"/>记账</NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName="selected"><Icon name="stat"/>统计</NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;