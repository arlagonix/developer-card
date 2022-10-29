import styled from "styled-components";
import IconLink from "./IconLink";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors.footerBackground};
  padding: 20px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <IconLink type="twitter" />
      <IconLink type="facebook" />
      <IconLink type="instagram" />
      <IconLink type="github" />
    </StyledFooter>
  );
}
