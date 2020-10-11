import styled from "@emotion/styled";

const BigCard = styled.section`
    width: 100%;
    min-height: 150px;
    box-shadow: var(--Shadow);
    border-radius: 5px;
    background-color: #fff;
`;

const Card = () => {
  return (
    <BigCard>
      <div></div>
    </BigCard>
  );
};

export default Card;
