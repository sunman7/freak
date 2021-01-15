import React from "react";
import {TagCSS} from "./TagCSS";
import {useTags} from "../../../useTags";

type Props = {
    value: string[],
    onChange: (selected: string[]) => void;
}
const TagSection: React.FC<Props> = (props) => {
    const selectedTags = props.value;
    const {tags, setTags} = useTags();
    const addTag = () => {
        const tagName = window.prompt("标签名称为");
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }

    };
    const toggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            //取消选中
            //剔除掉被选中的tag
            props.onChange(selectedTags.filter(t => t !== tag));
        } else {
            //选中
            props.onChange([...selectedTags, tag]);
        }
    };
    return (
        <TagCSS>
            <ol>
                {tags.map(tag =>
                    <li key={tag} onClick={() => toggleTag(tag)}
                        className={selectedTags.indexOf(tag) >= 0 ? "selected" : ""}>{tag}</li>)}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </TagCSS>);
};


export {TagSection};