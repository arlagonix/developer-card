import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.secondaryButtonBackground};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryButtonStroke};
  height: 34px;
  width: 115px;
  transition: scale 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: black;

  &:hover {
    scale: 1.025;
  }

  &:active {
    scale: 0.95;
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.linkedin};
  border: none;
  color: white;
`;

export default function Button({ href, src, alt, text, primary }) {
  const buttonContent = (
    <>
      <img src={src} alt={alt} /> {text}
    </>
  );
  if (primary === true) {
    return <StyledPrimaryButton href={href}>{buttonContent}</StyledPrimaryButton>;
  }
  return <StyledButton href={href}>{buttonContent}</StyledButton>;
}
