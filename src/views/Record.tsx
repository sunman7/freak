import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {TagSection} from "./record/TagSection";
import {NoteSection} from "./record/NoteSection";
import {CategorySection} from "./record/CategorySection";
import NumberPadSection from "./record/NumberPadSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Record() {
    return (
        <MyLayout>
            <CategorySection>
                <ul>
                    <li className="selected">支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <TagSection/>
            <NoteSection />

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