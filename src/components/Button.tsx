import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    title: string;
}

export default function Button({ onClick, className, title }: ButtonProps) {
    const theme = useContext(ThemeContext)
    return (
        <ButtonContainer onClick={onClick} className={className} color={theme.flavor.primaryMedium}>
            {title}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button `
    padding: .25rem 1rem;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.color};
    color: inherit;
`