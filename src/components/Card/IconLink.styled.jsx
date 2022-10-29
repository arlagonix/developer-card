import styled from "styled-components";

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

export default StyledIconLink;
