import styled from "styled-components";

export const ContactsList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 0;
    gap: 4px;
`

export const ContactsListItem = styled.li`
    width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
`

export const ContactBtn = styled.button`
    width: 48px;
    text-align: center;
    padding: 2px;
    margin-left: 10px;
    
    color: white;
    background-color: tomato;
    border: transparent;
    border-radius: 15px;
`