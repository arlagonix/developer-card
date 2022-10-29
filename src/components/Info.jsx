import Button from "./Button";
import styled from "styled-components";
import mailIcon from "../../static/icon-mail.svg";
import linkedinIcon from "../../static/icon-linkedin.svg";

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 32px;

  .header {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.headerText};
    font-weight: 700;
  }

  .job-title {
    color: ${({ theme }) => theme.colors.jobTitle};
  }

  .link {
    font-size: 12px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 16px;
`;

export default function Info() {
  return (
    <StyledHeader>
      <h1 className="header">Laura Smith</h1>
      <p className="job-title">Frontend Developer</p>
      <a href="#" className="link">
        laurasmith.website
      </a>
      <StyledButtonContainer>
        <Button href="#" src={mailIcon} alt="Icon of a mail letter" text="Email" />
        <Button href="#" src={linkedinIcon} alt="Linkedin Logo icon" text="Linkedin" primary />
      </StyledButtonContainer>
    </StyledHeader>
  );
}
