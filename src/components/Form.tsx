import styled from 'styled-components';
import { ReactNode, FC } from 'react';

type Props = {
    children: ReactNode;
    className: string;
}

const Form: FC<Props> = ({ children, className }) => {
    return (
        <FormContainer className={className}>
          {children}
        </FormContainer>
    )
}

export default Form 

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: bisque;
    padding: 2rem;
`;