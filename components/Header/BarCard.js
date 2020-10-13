import styled from "@emotion/styled";

const CardStyle = styled.section`
  display: flex;
  width: min-content;
  border-radius: 5px;
  cursor: ${(props) => props.cursor};
  background: var(--Light-Grayish-Cyan-BG);
  /* margin-right: 15px; */
  .card-text {
    font-size: clamp(12px,2vw,14px);
    padding: clamp(5px,2vw,10px);
    color: var(--MainCyan);
    font-weight: 700;
  }
  .x-remove {
    display: ${(props) => props.display};
    border: none;
    border-radius: 0 5px 5px 0;
    width: 35px;
    background-color: var(--MainCyan);
    background-image: url(/../images/icon-remove.svg);
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    &:hover {
      background-color: var(--Very-Dark-Grayish-Cyan);
    }
  }
`;

const BarCard = ({ item, display="block", cursor="text" }) => {
  return (
    <>
      <CardStyle display={display} cursor={cursor} item={item}>
        {}
        <div className="card-text">{item}</div>
        <button className="x-remove"></button>
      </CardStyle>
    </>
  );
};

export default BarCard;
