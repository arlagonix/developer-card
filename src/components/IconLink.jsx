import styled from "styled-components";

import twitterIcon from "../../static/icon-twitter.svg";
import facebookIcon from "../../static/icon-facebook.svg";
import instagramIcon from "../../static/icon-instagram.svg";
import githubIcon from "../../static/icon-github.svg";

const StyledIconLink = styled.a`
  height: 25px;
  transition: scale 0.3s;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;

export default function IconLink({ type }) {
  let src, alt;

  switch (type) {
    case "twitter":
    default:
      src = twitterIcon;
      alt = "Twitter logo icon";
      break;
    case "facebook":
      src = facebookIcon;
      alt = "Facebook logo icon";
      break;
    case "instagram":
      src = instagramIcon;
      alt = "Instagram logo icon";
      break;
    case "github":
      src = githubIcon;
      alt = "Github logo icon";
      break;
  }

  return (
    <StyledIconLink href="#">
      <img src={src} alt={alt} width="25" height="25" />
    </StyledIconLink>
  );
}
