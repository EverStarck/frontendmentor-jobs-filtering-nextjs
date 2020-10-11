import React from "react";
import styled from "@emotion/styled";
import BarCard from "../Header/BarCard";
import CardText from "./CardText";

const BigCard = styled.section`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  max-width: 100%;
  padding: 20px 50px;
  margin-bottom: 50px;
  box-shadow: var(--Shadow);
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  &::before {
    content: "";
    display: block;
    width: 6px;
    border-radius: 5px 0 0 5px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: var(--MainCyan);
    opacity: 0;
    transition: 0.5s ease;
  }
  &:hover {
    &::before {
      opacity: 1;
    }
  }
  .img-text-frame {
    display: flex;
    gap: 20px;
  }
`;

const PhotoStyle = styled.div`
  align-self: center;
  /* background: red; */
`;

const FilterList = styled.div`
  /* background: green; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = ({ data }) => {
  const { languages } = data;
  return (
    <BigCard>
      <div className="img-text-frame">
        <PhotoStyle>
          <img src={data.logo} alt={`Logo of the company ${data.company}`} />
        </PhotoStyle>

        <CardText data={data} />
      </div>

      <FilterList>
        {languages.map((language, index) => (
          <BarCard language={language} key={index} />
        ))}
      </FilterList>
    </BigCard>
  );
};

export default Card;
