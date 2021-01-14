import styled from "styled-components";

const TagsSection = styled.section`
  flex-grow: 1;
  background: #f7fbfc;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
      margin: 0 -12px;
      >li{
        display: inline-block;
        padding: 4px 18px;
        border-radius: 16px;
        background: #769fcd;
        margin: 8px 12px;
        color: #f7fbfc;
      }
  }
  >button{
    color:#769fcd;
    background: none;
    border: none;
    border-bottom: 1px solid;
    padding: 2px 4px;
    margin-top:8px;
  } 
  
`;

export {TagsSection}