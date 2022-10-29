import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors.footerBackground};
  padding: 20px;
`;

export default StyledFooter;
