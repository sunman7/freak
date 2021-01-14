import styled from "styled-components";

const NotesSection = styled.section`
    background: white;
    padding: 10px 16px;
    
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
export {NotesSection};