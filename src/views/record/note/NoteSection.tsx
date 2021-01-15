import React, {useRef} from "react";
import {NoteCSS} from "./NoteCSS";

type Props = {
    value: string,
    onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
    const note = props.value;
    const refInput = useRef<HTMLInputElement>(null);
    const blur = () => {
        if (refInput.current !== null) {
            props.onChange(refInput.current.value)
        }
    };
    return (
        <NoteCSS>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在此添加备注" defaultValue={note} onBlur={blur} ref={refInput}/>
            </label>
        </NoteCSS>
    );
};

export {NoteSection};