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
            <CategorySection/>

            <TagSection/>
            <NoteSection/>

            <NumberPadSection />


        </MyLayout>
    );
}

export default Record;