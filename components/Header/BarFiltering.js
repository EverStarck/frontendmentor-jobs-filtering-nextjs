import styled from "@emotion/styled";
import BarCard from "./BarCard";

const BarStyled = styled.nav`
  /* background: green; */
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 20px;
  border-radius: 5px;
  padding: 20px 40px;
  background: #fff;
  box-shadow: var(--Shadow);
  transform: translateY(-50%);
  .cards-flex {
    display: flex;
    /* background: red; */
    flex-wrap: wrap;
    gap: 15px;
  }
  .text-clear {
    /* background: green; */
    margin-left: 50px;
    align-self: center;
    color: var(--MainCyan);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        border-bottom: 1px solid var(--MainCyan);
    }
  }
`;

const BarFiltering = () => {
  return (
    <BarStyled>
     <div className="cards-flex">
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
      <BarCard />
     </div>
     <div className="text-clear">Clear</div>

    </BarStyled>
  );
};

export default BarFiltering;
