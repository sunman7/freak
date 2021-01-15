import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<string[]>(["1", "2"]);
    return {
        tags,setTags
    }
};
export {useTags};