import styled from "styled-components";

const CategorySection = styled.section`

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

export {CategorySection}