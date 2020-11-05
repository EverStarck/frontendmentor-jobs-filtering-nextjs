import styled from "@emotion/styled";

const CardStyle = styled.section`
  display: flex;
  width: min-content;
  border-radius: 5px;
  cursor: ${(props) => props.cursor};
  background: var(--Light-Grayish-Cyan-BG);
  /* margin-right: 15px; */
  .card-text {
    font-size: clamp(12px, 2vw, 14px);
    padding: clamp(5px, 2vw, 10px);
    color: var(--MainCyan);
    font-weight: 700;
    transition: all .5s ease;
    &:hover {
      color: ${(props) => props.hoverC};
      background-color: ${(props) => props.hoverBg};
    }
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
    transition: all .4s ease;
    &:hover {
      background-color: var(--Very-Dark-Grayish-Cyan);
    }
  }
`;

const BarCard = ({
  item,
  display = "block",
  cursor = "text",
  hoverC = "var(--Light-Grayish-Cyan-BG)",
  hoverBg = "var(--MainCyan)",
  click = true,
  useDataFiltering,
  dataFiltering,
}) => {

  // Add the item to State
  const handeClick = () => {
    // alert(item);
    // If the item don't are in the array, they be added
    if (click && !dataFiltering.includes(item)) {
      useDataFiltering([
        ...dataFiltering,
        item,
      ])
    }
  }


  // Remove the item from the State
  const removeItem = () => {
    useDataFiltering(
      dataFiltering.filter(word => word !== item)
    );
  }

  return (
    <>
      <CardStyle
        display={display}
        cursor={cursor}
        item={item}
        hoverC={hoverC}
        hoverBg={hoverBg}
        click={click}
      >
        {}
        <div className="card-text" onClick={handeClick}>{item}</div>
        <button className="x-remove" onClick={removeItem}></button>
      </CardStyle>
    </>
  );
};

export default BarCard;
