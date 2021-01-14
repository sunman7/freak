import styled from "styled-components";
import React, {useState} from "react";

const TagSection: React.FunctionComponent = (props) => {
    const [tags, setTags] = useState<string[]>(["1", "2"]);
    const [selectedTags, setselectedTags] = useState<string[]>([]);
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
            setselectedTags(selectedTags.filter(t => t !== tag));
        } else {
            //选中
            setselectedTags([...selectedTags, tag]);
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
const TagCSS = styled.section`
  flex-grow: 1;
  background: #f7fbfc;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{
      margin: 0 -12px;
      >li{
        display: inline-block;
        padding: 4px 18px;
        border-radius: 16px;
        background:  #D6E6F2;
        margin: 8px 12px;
        
        &.selected{
            background: #769fcd;
            color: #f7fbfc;
        }
      }
  }
  >button{
    color:#769fcd;
    background: none;
    border: none;
    border-bottom: 1px solid;
    padding: 2px 4px;
    margin-top:8px;
  } 
  
`;

export {TagSection};