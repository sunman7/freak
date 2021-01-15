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
                value={selected.tags}
                onChange={(tags) => selectedChanged({tags})}/>
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