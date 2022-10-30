import styled from "styled-components";

const StyledButton = styled.a`
  width: 115px;
  height: 34px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  border-width: 1;
  transition: scale 0.3s;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  &:hover {
    scale: 1.025;
  }

  &:active {
    scale: 0.95;
  }

  ${(props) => {
    const colors = props.theme.colors;
    if (props.primary === true)
      return `
        background: ${colors.linkedin};
        color: white;
      `;
    return `
      border: 1px solid ${colors.secondaryButtonStroke};
      background: ${colors.secondaryButtonBackground};
      color: black;
    `;
  }}
`;

export default StyledButton;
