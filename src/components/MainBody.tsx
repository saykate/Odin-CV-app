import styled from "styled-components";
import { ReactNode, FC, useContext } from "react";
import { ThemeContext } from '../context/Theme';

type Props = {
  children: ReactNode;
};

const MainBody: FC<Props> = ({ children }) => {
  const theme = useContext(ThemeContext)
  return (
    <MainBodyContainer className="mainBody" color={theme.flavor.accent}>
      {children}
    </MainBodyContainer>
    );
};

const MainBodyContainer = styled.div`
  color: ${props => props.color};
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar body";

  // @media (max-width: 750px){
  //     grid-template-columns: 1fr;
  //     grid-template-rows: 1fr 1fr 1fr;
  //     grid-template-areas: 
  //     "sidebar"
  //     "nav"
  //     "body"
  //     ;
  //   }
`;

export default MainBody;
