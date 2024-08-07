import styled from "@emotion/styled";
import { useState } from "react";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { MAIN_SCRIPTS } from "../constants/scripts";
import { commons } from "../styles/commons";
import bom from "/bom.png";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BomImage = styled.img`
  height: min(90%, 1020px);
  position: absolute;
  bottom: 0;
  right: 40%;
  transform: translate(50%, 0);
  user-select: none;
`;

const TextBoxContainer = styled.div`
  ${commons.card}
  width: 480px;
  height: 240px;
  max-width: 90vw;
  max-height: 50vh;
  position: absolute;
  left: 20%;
  bottom: 15%;
  z-index: 10;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;

  @media screen and (max-width: 720px) {
    left: 5vw;
    bottom: calc(5vw + 72px);
    width: 90vw;
    height: 20%;
  }
`;

const TextContainer = styled.span`
  color: white;
  font-size: 1.2rem;
  line-height: 2rem;
  word-break: keep-all;
`;

const HomePage = () => {
  const [scriptIndex, setScriptIndex] = useState<number>(0);
  const [script, setScript] = useState<string>(MAIN_SCRIPTS[0]);

  return (
    <DefaultLayout useTotalStats fullScreen>
      <Container>
        <BomImage
          src={bom}
          onClick={() => {
            const randomIndex = Math.floor(
              Math.random() * (MAIN_SCRIPTS.length - 1)
            );
            setScript(
              MAIN_SCRIPTS[
                randomIndex < scriptIndex ? randomIndex : randomIndex + 1
              ]
            ); //random avoiding duplicated script
            setScriptIndex(
              randomIndex < scriptIndex ? randomIndex : randomIndex + 1
            );
          }}
        />
        <TextBoxContainer>
          <TextContainer> {script} </TextContainer>
        </TextBoxContainer>
      </Container>
    </DefaultLayout>
  );
};

export default HomePage;
