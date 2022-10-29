import styled from "styled-components";

const StyledCard = styled.main`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  width: 95%;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
`;

export default StyledCard;
