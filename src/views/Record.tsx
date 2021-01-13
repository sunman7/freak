import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  >ol{
      margin: 0 -12px;
      >li{
        display: inline-block;
        padding: 4px 18px;
        border-radius: 16px;
        background: #d9d9d9;
        margin: 8px 12px;
      }
  }
  >button{
    color:#666666;
    background: none;
    border: none;
    border-bottom: 1px solid;
    padding: 2px 4px;
    margin-top:8px;
  } 
  
`;
const NotesSection = styled.section`
    background: #f5f5f5;
    padding: 10px 16px;
    >label{
      display: flex;
      align-items: center;
       > span{
        margin-right: 16px;
        white-space: nowrap;
       }
       > input{
        display: block;
        width: 100%;
        height: 72px;
        border: none;
        background: none;
       }
    }

`;
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
const NumberPadSection = styled.section`

`;


function Record() {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在此添加备注"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Record;