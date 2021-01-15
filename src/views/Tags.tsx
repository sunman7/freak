import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/Icon";

const TagsCSS = styled.ol`
  font-size: 16px;
  background: #d6e6f2;
  box-shadow: inset 0 0 3px rgba(0,0,0,.12);
  border-radius: 4px;
  > li{
      border-bottom: 1px solid #769fcd;
      line-height: 20px;
      padding: 12px 16px 0 0;
      margin: 0 12px;
      display: flex;
      align-items: center;
      justify-content: space-between; 
     
  }
`;
const Button = styled.button`
  font-size: 20px;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  background: #d6e6f2;
  box-shadow: inset 0 0 3px rgba(0,0,0,.12);
  
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Space = styled.div`
  height: 40px;
`

function Tags() {
    const {tags, setTags} = useTags(); // useTags
    return (
        <Layout>
            <TagsCSS>
                {tags.map(tag =>

                    <li key={tag}><span className="oneLine">{tag}</span><Icon name="right"></Icon></li>)}
            </TagsCSS>
            <Center>
                <Space></Space>
                <Button>新建标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;