import React, {useState} from "react";
import styled from "styled-components";
import {TagSection} from "./record/tag/TagSection";
import {NoteSection} from "./record/note/NoteSection";
import {CategorySection} from "./record/category/CategorySection";
import NumberPadSection from "./record/numberpad/NumberPadSection";


const MyLayout = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-height: 100vh;
`;


function Record() {
    const [selected, setSelected] = useState({
        tagId: [] as number[],
        note: "",
        category: "-" as ("-" | "+"),
        amount: 0
    });
    const selectedChanged = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        });
    };
    return (
        <MyLayout>
            <CategorySection value={selected.category}
                             onChange={(category) => selectedChanged({category})}/>
            <TagSection
                value={selected.tagId}
                onChange={(tagId) => selectedChanged({tagId})}/>
            <NoteSection value={selected.note} onChange={(note) => {
                selectedChanged({note});
            }}
            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => selectedChanged({amount})} onOk={() => {
            }}/>
        </MyLayout>
    );
}

export default Record;