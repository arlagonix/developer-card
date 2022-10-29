import styled from "styled-components";

const StyledMainHeader = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.headerText};
  font-weight: 700;
`;

export default StyledMainHeader;
