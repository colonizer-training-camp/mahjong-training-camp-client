import styled from "@emotion/styled";
import { useState } from "react";
import Menu from "../Menu";
import TitleLogo from "../TitleLogo";
import { scripts } from "../scripts";
import bom from "/bom.png";
import mahjongBackground from "/mahjong-background.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  object-fit: cover;
  z-index: -100;
  user-select: none;
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
  width: 480px;
  height: 240px;
  max-width: 90vw;
  max-height: 50vh;
  background-color: #00000083;
  border-radius: 8px;
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
    bottom: 5vw;
    width: 90vw;
    height: 20%;
  }
`;

const TextContainer = styled.span`
  font-family: "TAEBAEKmilkyway";
  color: white;
  font-size: 1.2rem;
  line-height: 2rem;
  word-break: keep-all;
`;

const Home = () => {
  const [scriptIndex, setScriptIndex] = useState<number>(0);
  const [script, setScript] = useState<string>(scripts[0]);

  return (
    <>
      <Container>
        <BackgroundImage src={mahjongBackground} />
        <BomImage
          src={bom}
          onClick={() => {
            const randomIndex = Math.floor(
              Math.random() * (scripts.length - 1)
            );
            setScript(
              scripts[randomIndex < scriptIndex ? randomIndex : randomIndex + 1]
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
      <Menu />
      <TitleLogo useTotalStats />
    </>
  );
};

export default Home;
