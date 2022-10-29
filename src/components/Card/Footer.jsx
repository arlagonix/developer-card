import Icons from "../../styles/Icons";

import StyledFooter from "./Footer.styled";
import StyledIconLink from "./IconLink.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledIconLink href="#">{Icons.twitter}</StyledIconLink>
      <StyledIconLink href="#">{Icons.facebook}</StyledIconLink>
      <StyledIconLink href="#">{Icons.instagram}</StyledIconLink>
      <StyledIconLink href="#">{Icons.github}</StyledIconLink>
    </StyledFooter>
  );
}
