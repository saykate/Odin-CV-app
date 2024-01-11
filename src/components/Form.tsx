import styled from 'styled-components';
import { ReactNode, FC, useContext } from 'react';
import { ThemeContext } from '../context/Theme';

type Props = {
    children: ReactNode;
    className?: string;
}

const Form: FC<Props> = ({ children, className }) => {
    const theme = useContext(ThemeContext)
    return (
        <FormContainer className={className} color={theme.flavor.primaryLight} >
          {children}
        </FormContainer>
    )
}

export default Form 

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${props => props.color};
    padding: 1.5rem;
    border-radius: 5px;
`;