import styled from "styled-components";
import { ReactNode, FC } from "react";

type Props = {
  children: ReactNode;
};

const MainBody: FC<Props> = ({ children }) => {
  return (
    <MainBodyContainer>
      {children}
    </MainBodyContainer>
    );
};

const MainBodyContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "sidebar nav"
    "sidebar body";
`;

export default MainBody;
