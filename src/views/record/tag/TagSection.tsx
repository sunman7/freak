import React from "react";
import {TagCSS} from "./TagCSS";
import {useTags} from "../../../useTags";

type Props = {
    value: number[],
    onChange: (selected: number[]) => void;
}
const TagSection: React.FC<Props> = (props) => {
    const selectedTagId = props.value;
    const {tags, setTags} = useTags();
    const addTag = () => {
        const tagName = window.prompt("标签名称为");
        if (tagName !== null) {
            setTags([...tags, {id: Math.random(), name: tagName}]);
        }

    };
    const toggleTag = (tagId: number) => {
        const index = selectedTagId.indexOf(tagId);
        if (index >= 0) {
            //取消选中
            //剔除掉被选中的tag
            props.onChange(selectedTagId.filter(t => t !== tagId));
        } else {
            //选中
            props.onChange([...selectedTagId, tagId]);
        }
    };
    return (
        <TagCSS>
            <ol>
                {tags.map(tag =>
                    <li key={tag.id} onClick={() => toggleTag(tag.id)}
                        className={selectedTagId.indexOf(tag.id) >= 0 ? "selected" : ""}>{tag.name}</li>)}
            </ol>
            <button onClick={addTag}>新增标签</button>
        </TagCSS>);
};


export {TagSection};