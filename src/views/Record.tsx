import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagSection} from "./record/tag/TagSection";
import {NoteSection} from "./record/note/NoteSection";
import {CategorySection} from "./record/category/CategorySection";
import NumberPadSection from "./record/numberpad/NumberPadSection";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Record() {
    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: "",
        category: "-" as ("-" | "+"),
        amount: 0
    });
    return (
        <MyLayout>
            <CategorySection value={selected.category}
                             onChange={(category) => setSelected({...selected, category: category})}/>
            <TagSection
                value={selected.tags}
                onChange={(tags) => setSelected({...selected, tags: tags})}/>
            <NoteSection value={selected.note} onChange={(note) => {
                setSelected({...selected, note: note});
            }}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => setSelected({...selected, amount: amount})} onOk={() => {
            }}/>


        </MyLayout>
    );
}

export default Record;