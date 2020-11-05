import React, { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import Header from "../components/Header/Header";
import BarFiltering from "../components/Header/BarFiltering";
import Card from "../components/Main/Card";
import Data from "../data.json";

const MainFrame = styled.div`
  box-sizing: border-box;
  font-family: "Spartan", sans-serif;
  background: var(--Light-Grayish-Cyan-BG);
  min-height: 100vh;
  max-width: 100vw;
  /* ### Primary */

  --MainCyan: hsl(180, 29%, 50%);

  /* ### Neutral */

  --Light-Grayish-Cyan-BG: hsl(180, 52%, 96%);
  --Light-Grayish-Cyan: hsl(180, 31%, 95%);
  --Dark-Grayish-Cyan: hsl(180, 8%, 52%);
  --Very-Dark-Grayish-Cyan: hsl(180, 14%, 20%);

  --Shadow: 7px 11px 25px -12px rgba(0, 0, 0, 0.2);

  .section {
    max-width: 80vw;
    margin: 0 auto;
    padding-bottom: 20px;
    /* Mobile Responsive */
    @media screen and (max-width: 375px) {
      max-width: 90vw;
    }
  }
`;

export default function Home() {
  // All the data from the json
  const [datas] = useState(Data);
  // The array of the bar filter
  const [dataFiltering, useDataFiltering] = useState([]);
  // console.log(dataFiltering) //[ "Frontend", "JavaScript", "Senior" ]
  // The data that return
  let filteredData = [];
  return (
    <MainFrame>
      <Head>
        <title>Jobs filtering</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <div className="section">
        <BarFiltering
          dataFiltering={dataFiltering}
          useDataFiltering={useDataFiltering}
        />

        {/* MAIN */}

        {datas.map((data) => {
          //  console.log(data);
          // The data in an array to compare //[ "Frontend", "Senior", "HTML", "CSS", "JavaScript" ]
          filteredData = [
            data.role,
            data.level,
            ...data.languages,
            ...data.tools,
          ];
          // Return "Frontend" and every item of filteredData alone and then compare
          filteredData.map((filteredItem) => filteredItem);
          if (
            dataFiltering.every((filteredItem) =>
              filteredData.includes(filteredItem)
            )
          ) {
            return (
              <Card
                data={data}
                key={data.id}
                dataFiltering={dataFiltering}
                useDataFiltering={useDataFiltering}
              />
            );
          }
        })}
      </div>
    </MainFrame>
  );
}
