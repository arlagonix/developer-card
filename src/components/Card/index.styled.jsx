import styled from "styled-components";

export const StyledCard = styled.main`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 95%;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledInformation = styled.div`
  padding: 24px;
`;

export const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 32px;
`;

export const StyledMainHeader = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.headerText};
  font-weight: 700;
`;

export const StyledJobTitle = styled.p`
  color: ${({ theme }) => theme.colors.jobTitle};
`;

export const StyledSiteLink = styled.a`
  font-size: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 16px;
`;

export const StyledArticle = styled.article`
  margin-top: 16px;
`;

export const StyledArticleHeader = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.headerText};
  font-weight: 700;
`;

export const StyledArticleContent = styled.p`
  font-size: 12px;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.usualText};
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background: ${({ theme }) => theme.colors.footerBackground};
  padding: 20px;
`;

export const StyledIconLink = styled.a`
  height: 25px;
  transition: scale 0.3s;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;
