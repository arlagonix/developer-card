import styled from "styled-components";

const StyledArticle = styled.article`
  margin-top: 16px;
`;

const StyledArticleHeader = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.headerText};
  font-weight: 700;
`;

const StyledArticleContent = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.usualText};
`;

export default function Article({ header, content }) {
  return (
    <StyledArticle>
      <StyledArticleHeader>{header}</StyledArticleHeader>
      <StyledArticleContent>{content}</StyledArticleContent>
    </StyledArticle>
  );
}
