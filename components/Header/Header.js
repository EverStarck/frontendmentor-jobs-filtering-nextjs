import styled from "@emotion/styled";

const HeaderFrame = styled.header`
  height: 15vh;
  background-image: url(/../images/bg-header-desktop.svg);
  background-color: var(--MainCyan);
  background-size: cover;
  /* Mobile Responsive */
  @media screen and (max-width: 375px) {
    min-height: 25vh;
    background-image: url(/../images/bg-header-mobile.svg);
  }
`;

const Header = () => {
  return <HeaderFrame></HeaderFrame>;
};

export default Header;
