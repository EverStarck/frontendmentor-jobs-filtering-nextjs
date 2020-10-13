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
  margin-bottom: 20px;
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

  /* Mobile Responsive */
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
    margin-bottom: 35px;
    .img-text-frame {
      flex-direction: column;
    }

    /* FilterList in the bottom */
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PhotoStyle = styled.div`
  align-self: center;
  /* background: red; */
  /* Mobile Responsive */
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    width: 50px;
    transform: translateY(-75%);
    position: absolute;
    img {
      width: 50px;
    }
  }
`;

const FilterList = styled.div`
  /* background: green; */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Hr = styled.hr`
  display: none;
  /* Mobile Responsive */
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    color: var(--Light-Grayish-Cyan);
    margin-bottom: 17px;
  }
`;

const Card = ({ data }) => {
  const { languages, role, level } = data;
  return (
    <BigCard>
      <div className="img-text-frame">
        <PhotoStyle>
          <img src={data.logo} alt={`Logo of the company ${data.company}`} />
        </PhotoStyle>

        <CardText data={data} />
      </div>

      <Hr />

      <FilterList>
        <BarCard item={role} display="none" cursor="pointer"/>
        <BarCard item={level} display="none" cursor="pointer"/>
        {languages.map((language, index) => (
          <BarCard language={language} item={language} key={index} display="none" cursor="pointer"/>
        ))}
      </FilterList>
    </BigCard>
  );
};

export default Card;
