import Avatar from "./Avatar";
import Footer from "./Footer";
import StyledCard from "./Card.styled";
import Information from "./Information";

export default function Card() {
  return (
    <StyledCard>
      <Avatar />
      <Information />
      <Footer />
    </StyledCard>
  );
}
