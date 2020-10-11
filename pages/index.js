import Head from "next/head";
import styled from "@emotion/styled";
import Header from "../components/Header/Header";
import BarFiltering from "../components/Header/BarFiltering";
import Card from "../components/Main/Card";

const MainFrame = styled.div`
  box-sizing: border-box;
  font-family: 'Spartan', sans-serif;
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
}
`;

export default function Home() {
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
        <BarFiltering/>

        <Card/>
      </div>
    </MainFrame>
  );
}
