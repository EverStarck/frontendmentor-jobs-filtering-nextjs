import styled from "@emotion/styled";

const TextFrame = styled.div`
  display: block;
  color: var(--MainCyan);
  font-size: clamp(5px, 2vw, 10px);
  /* background: aliceblue; */
  h1 {
    margin: 0px;
    color: var(--Very-Dark-Grayish-Cyan);
    cursor: pointer;
    &:hover {
      color: var(--MainCyan);
    }
  }
  .mini-text-upper {
    font-size: clamp(11px, 2vw, 12px);
    font-weight: 500;
    display: flex;
    gap: 15px;
    .circle-text {
      padding: 6px;
      border-radius: 10px;
      font-size: clamp(9px, 2vw, 10px);
      text-align: center;
      color: var(--Light-Grayish-Cyan);
      background-color: var(--MainCyan);
    }
    .m-10 {
      margin-left: -10px;
    }
    .black-color {
      background-color: var(--Very-Dark-Grayish-Cyan);
    }
  }
  .mini-text-bottom {
    display: flex;
    justify-content: space-between;
    gap: 21px;
    font-size: clamp(12px, 2vw, 14px);
    color: var(--Dark-Grayish-Cyan);
  }

  /* Mobile Responsive */
  @media screen and (max-width: 375px) {
    margin-top: 5px;
  }
`;

const CardText = ({ data }) => {
  return (
    <TextFrame>
      <div className="mini-text-upper">
        <h3>{data.company}</h3>
        {data.new ? <h3 className="circle-text">NEW!</h3> : null}
        {data.featured ? (
          <h3 className="circle-text m-10 black-color">FEATURED</h3>
        ) : null}
      </div>
      <h1>{data.position}</h1>
      <div className="mini-text-bottom">
        <p>{data.postedAt}</p>
        <p>&#8226;</p>
        <p>{data.contract}</p>
        <p>&#8226;</p>
        <p>{data.location}</p>
      </div>
    </TextFrame>
  );
};

export default CardText;
