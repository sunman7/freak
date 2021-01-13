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
     >a{
      display: flex;
      flex-direction: column;
     justify-content: center;
     align-items: center;
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
                    <Link to="/tags">
                        <Icon name="tag"/>标签页</Link>
                </li>
                <li>

                    <Link to="/record"> <Icon name="record"/>记账</Link>
                </li>
                <li>

                    <Link to="/statistics"><Icon name="stat"/>统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;