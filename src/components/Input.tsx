import styled from 'styled-components';
import { FC } from 'react';

interface InputProps {
    type: string, 
    name: string, 
    placeholder: string,
}

const Input: FC<InputProps> = ({ type, name, placeholder }) => {
    return (
        <InputContainer>
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    input {
        border-radius: 5px;
    }
`;


