import styled from "styled-components";

const NumberPadSection = styled.section`
  
  > .output{
    background: #F7FBFC;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.12);
  }
  > .pad{
    
    >button{
   
      
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok{
          float: right;
          height: 128px;
      }
      &.zero{
        width: 50%;
      }
      &:first-child{
          background: #f2f2f2;
      }
      &:nth-child(2),&:nth-child(5){
        background: #e0e0e0;
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background: #d3d3d3;
      }
       &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background: #c1c1c1;
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
      background: #bbbbbb;
      
      }
      &:nth-child(12){
        background: #9a9a9a;
      }
      &:nth-child(14){
      background: #a9a9a9;
      }
    } 
  }
`;

export default NumberPadSection;