import mailIcon from "../../../static/icon-mail.svg";
import linkedinIcon from "../../../static/icon-linkedin.svg";

import Button from "../Button";
import Article from "./Article";

import StyledHeader from "./Header.Styled";
import StyledSiteLink from "./SiteLink.styled";
import StyledJobTitle from "./JobTitle.styled";
import StyledMainHeader from "./MainHeader.styled";
import StyledInformation from "./Information.styled";
import StyledButtonContainer from "./ButtonContainer.styled";

const detailedInfo = [
  {
    id: 1,
    header: "About",
    content:
      "I am a frontend developer with a particular interest in making \
      things simple and automating daily tasks. I try to keep up with \
      security and best practices, and am always looking for new things \
      to learn.",
  },
  {
    id: 2,
    header: "Interests",
    content:
      "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. \
      Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
  },
];

export default function Information() {
  return (
    <StyledInformation>
      <StyledHeader>
        <StyledMainHeader>Laura Smith</StyledMainHeader>
        <StyledJobTitle>Frontend Developer</StyledJobTitle>
        <StyledSiteLink href="#">laurasmith.website</StyledSiteLink>
        <StyledButtonContainer>
          <Button href="#" src={mailIcon} alt="Icon of a mail letter" text="Email" />
          <Button href="#" src={linkedinIcon} alt="Linkedin Logo icon" text="Linkedin" primary />
        </StyledButtonContainer>
      </StyledHeader>
      {detailedInfo.map((item) => (
        <Article key={item.id} header={item.header} content={item.content} />
      ))}
    </StyledInformation>
  );
}
