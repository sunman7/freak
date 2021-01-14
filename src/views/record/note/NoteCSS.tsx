import styled from "styled-components";

const NoteCSS = styled.section`
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
export {NoteCSS}