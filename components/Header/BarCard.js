import styled from "@emotion/styled";

const CardStyle = styled.section`
  display: flex;
  width: min-content;
  border-radius: 5px;
  background: var(--Light-Grayish-Cyan-BG);
  /* margin-right: 15px; */
  .card-text {
    font-size: 14px;
    padding: 10px;
    color: var(--MainCyan);
    font-weight: 700;
  }
  .x-remove {
    /* display: none */
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

const BarCard = ({language}) => {
  return (
    <>
      <CardStyle>
        <div className="card-text">{language}</div>
        <button className="x-remove"></button>
      </CardStyle>
    </>
  );
};

export default BarCard;
