import styled from "@emotion/styled";

const HeaderFrame = styled.header`
  height: 15vh;
  background-image: url(/../images/bg-header-desktop.svg);
  background-color: var(--MainCyan);
  background-size: cover;
`;

const Header = () => {
  return <HeaderFrame></HeaderFrame>;
};

export default Header;
