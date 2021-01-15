import {useState} from "react";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([{id:1,name:"1"}]);
    return {
        tags, setTags
    };
};
export {useTags};