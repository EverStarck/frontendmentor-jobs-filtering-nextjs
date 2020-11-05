import styled from "@emotion/styled";
import BarCard from "./BarCard";

const BarStyled = styled.nav`
  /* background: green; */
  max-height: 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 76.1px;
  border-radius: 5px;
  padding: 20px 40px;
  background: #fff;
  box-shadow: var(--Shadow);
  transform: translateY(-50%);
  overflow: auto;
  opacity: ${(props) => props.dataFiltering.length === 0 ? "0" : "1"};
  transition: all .4s ease-in-out;
  .cards-flex {
    display: flex;
    /* background: red; */
    flex-wrap: wrap;
    gap: 15px;
  }
  /* Mobile Responsive */
  @media screen and (max-width: 375px) {
    max-height: 300px;
  }
`;

const TextClear = styled.div`
  /* background: green; */
  margin-left: 50px;
  align-self: center;
  cursor: pointer;
  &:hover {
    span {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  span {
    color: var(--MainCyan);
    font-size: 14px;
    font-weight: 700;
    position: relative;
    transition: all 0.2s ease-in-out;
    &::after {
      content: "";
      height: 2px;
      width: 0;
      opacity: 0;
      position: relative;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.2s;
      background-color: var(--MainCyan);
      display: block;
    }
  }
`;

const BarFiltering = ({ useDataFiltering, dataFiltering }) => {
  return (
    <BarStyled dataFiltering={dataFiltering}>
      <div className="cards-flex">
        {dataFiltering.map((dataFilteri, index) => (
          <BarCard
            item={dataFilteri}
            useDataFiltering={useDataFiltering}
            dataFiltering={dataFiltering}
            hoverBg="none"
            hoverC="none"
            key={index}
            click={false}
          />
        ))}
      </div>
      <TextClear onClick={() => useDataFiltering([])}>
        <span>Clear</span>
      </TextClear>
    </BarStyled>
  );
};

export default BarFiltering;
