
import styled from "styled-components";

const CategoryCSS = styled.section`
  position: relative;
  >ul{
    display: flex;
    font-size: 24px;
    justify-content: center;
    position:relative;
    background: #d6e6f2;
    >li{ 
      text-align: center;
      width: 25%;
      padding: 16px 0;
      &.selected{
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
              margin-bottom: 5px;
          }
      }
    }
  }
`;
export {CategoryCSS};