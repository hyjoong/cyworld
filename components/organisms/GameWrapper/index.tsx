import React, { useState } from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import Text from "components/atoms/Text";
import Divider from "components/atoms/Divider";
import Contents from "../Contents";
import Image from "components/atoms/Image";
import SearchBox from "components/molecules/SearchBox";
import GameBox from "components/molecules/GameBox";
import Button from "components/atoms/Button";
import LottoNumbers from "components/molecules/LottoNumbers";
import { defaultLottoNumbers } from "constants/index";

const GameWrapper = () => {
  const [result, setResult] = useState<string>("결과");
  const [word, setWord] = useState<string>("선풍기");
  const [wordInput, setWordInput] = useState<string>("");
  const [lottoList, setLottoList] = useState<string[]>(defaultLottoNumbers);

  const handleword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setWordInput(value);
  };

  const handleSearch = () => {
    if (word[word.length - 1] === wordInput[0]) {
      setWord(wordInput);
      setResult("정답입니다!");
    } else {
      setResult("오답입니다!");
    }
  };

  const handleMakeLottos = () => {
    const lottos = new Array();
    for (let i = 0; i < 6; i++) {
      const num = parseInt(Math.random() * 45 + 1);
      if (lottos.indexOf(num) == -1) {
        lottos.push(num);
      }
      lottos.push();
    }
    const sortedLottos = lottos.sort((a, b) => a - b);
    setLottoList(sortedLottos);
  };

  return (
    <Contents>
      <GameTitle>
        <Title>GAME </Title>
        <Text>TODAY CHOICE</Text>
      </GameTitle>
      <Divider />
      <GameListBox>
        <GameBox>
          <Image name="train" />
          <Text isBold={true}>제시어: {word}</Text>
          <SearchBox
            onChange={handleword}
            wordInput={wordInput}
            onClick={handleSearch}
          />
          <Text>{result}</Text>
        </GameBox>
        <GameBox>
          <Image name="lotto" />
          <Text>버튼을 누르세요.</Text>
          <LottoNumbers lottoNumbers={lottoList} />
          <Button onClick={handleMakeLottos}>BUTTON</Button>
        </GameBox>
      </GameListBox>
    </Contents>
  );
};

const GameTitle = styled.div`
  display: flex;

  p {
    :nth-child(2) {
      display: flex;
      align-items: center;
      font-size: 8px;
      margin-left: 5px;
    }
  }
`;

const GameListBox = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    :first-child {
      img {
        width: 50px;
        height: 47px;
      }

      p {
        font-size: 13px;
      }
    }
    :nth-child(2) {
      img {
        width: 45px;
        height: 48px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export default GameWrapper;
