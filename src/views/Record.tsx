import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {TagsSection} from "./record/TagsSection";
import {NotesSection} from "./record/NotesSection";
import {CategorySection} from "./record/CategorySection";
import NumberPadSection from "./record/NumberPadSection";

const MyLayout=styled(Layout)`
  display: flex;
  flex-direction: column;
`

function Record() {
    return (
        <MyLayout>
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
                <div className="output">100</div>
                <div className="pad claerfix">
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
                    <button className="ok">OK</button>
                    <button className="zero">0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </MyLayout>
    );
}

export default Record;