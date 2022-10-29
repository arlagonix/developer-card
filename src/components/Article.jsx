import styled from "styled-components";

const StyledArticle = styled.article`
  margin-top: 16px;

  .header {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.headerText};
    font-weight: 700;
  }

  .content {
    font-size: 12px;
    margin-top: 4px;
    color: ${({ theme }) => theme.colors.usualText};
  }
`;

export default function Article({ type }) {
  let header, content;

  switch (type) {
    case "about":
    default:
      header = "About";
      content =
        "I am a frontend developer with a particular interest in making things simple and\
        automating daily tasks. I try to keep up with security and best practices, and am always\
        looking for new things to learn.";
      break;
    case "interests":
      header = "Interests";
      content =
        "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel \
        geek. Pop culture ninja. Coffee fanatic.";
      break;
  }

  return (
    <StyledArticle>
      <h2 className="header">{header}</h2>
      <p className="content">{content}</p>
    </StyledArticle>
  );
}
