import styled from 'styled-components';
import { FC } from 'react';

interface InputProps {
    type: string, 
    name: string, 
    id: string,
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({ type, name, id, value, placeholder, onChange }) => {
    return (
        <InputContainer>
            <label htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
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


