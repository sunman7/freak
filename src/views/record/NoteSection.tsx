import styled from "styled-components";
import React, {useRef, useState} from "react";

const NoteSection: React.FC = () => {
    const [note, setNote] = useState("");
    const refInput = useRef<HTMLInputElement>(null);
    const blur = () => {
        if(refInput.current !== null){
            console.log(refInput.current.value);
        }
    };
    return (
        <NotesCSS>
            {note}
            <label>
                <span>备注</span>
                <input type="text" placeholder="在此添加备注" defaultValue={note} onBlur={blur} ref={refInput}/>
            </label>
        </NotesCSS>
    );
};
const NotesCSS = styled.section`
    background: #d6e6f2;
    padding: 10px 16px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.12);
    
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
export {NoteSection};