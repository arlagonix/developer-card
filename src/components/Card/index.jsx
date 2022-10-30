import photo from "../../../static/photo.png";
import Icons from "../../styles/Icons";

import Button from "../Button";
import {
  StyledCard,
  StyledFooter,
  StyledHeader,
  StyledArticle,
  StyledSiteLink,
  StyledJobTitle,
  StyledIconLink,
  StyledMainHeader,
  StyledInformation,
  StyledArticleHeader,
  StyledArticleContent,
  StyledButtonContainer,
} from "./index.styled";

export default function Card() {
  return (
    <StyledCard>
      <img src={photo} alt="Photo of a woman" width={({ theme }) => theme.sizes.maxWidth} />
      <StyledInformation>
        <StyledHeader>
          <StyledMainHeader>Laura Smith</StyledMainHeader>
          <StyledJobTitle>Frontend Developer</StyledJobTitle>
          <StyledSiteLink href="#">laurasmith.website</StyledSiteLink>
          <StyledButtonContainer>
            <Button href="#">{Icons.letter_16px} Letter</Button>
            <Button href="#" primary>
              {Icons.linkedin_16px} Linkedin
            </Button>
          </StyledButtonContainer>
        </StyledHeader>
        <StyledArticle>
          <StyledArticleHeader>About</StyledArticleHeader>
          <StyledArticleContent>
            I am a frontend developer with a particular interest in making things simple and
            automating daily tasks. I try to keep up with security and best practices, and am always
            looking for new things to learn.
          </StyledArticleContent>
        </StyledArticle>
        <StyledArticle>
          <StyledArticleHeader>Interests</StyledArticleHeader>
          <StyledArticleContent>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel
            geek. Pop culture ninja. Coffee fanatic.
          </StyledArticleContent>
        </StyledArticle>
      </StyledInformation>
      <StyledFooter>
        <StyledIconLink href="#">{Icons.twitter_25px}</StyledIconLink>
        <StyledIconLink href="#">{Icons.facebook_25px}</StyledIconLink>
        <StyledIconLink href="#">{Icons.instagram_25px}</StyledIconLink>
        <StyledIconLink href="#">{Icons.github_25px}</StyledIconLink>
      </StyledFooter>
    </StyledCard>
  );
}
