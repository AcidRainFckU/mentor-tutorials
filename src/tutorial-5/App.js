import React from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";

import "./App.css";

const App = () => {
  const [phrases, setShowPhrases] = React.useState([]);

  const adjectivesArr = [
    "абсолютный",

    "адский",

    "азартный",

    "активный",

    "ангельский",

    "астрономический",

    "баснословный",

    "безбожный",

    "безбрежный",

    "безвозвратный",

    "безграничный",

    "бездонный",

    "бездушный",

    "безжалостный",

    "замечательно",

    "замечательный",

    "записной",

    "запредельный",

    "заядлый",

    "звериный",

    "зверский",

    "зеленый",

    "злой",

    "злостный",

    "значительный",

    "неоспоримый",

    "неотразимый",

    "неоценимый",

    "непередаваемый",
  ];
  const nounsArr = [
    "лгун",

    "день",

    "конь",

    "олень",

    "человек",

    "программист",

    "ребёнок",

    "конец",

    "город",

    "дурак",
  ];

  function createPhrase() {
    const phrase = `${
      adjectivesArr[Math.floor(Math.random() * (adjectivesArr.length - 1))]
    } ${
      adjectivesArr[Math.floor(Math.random() * (adjectivesArr.length - 1))]
    } ${nounsArr[Math.floor(Math.random() * (nounsArr.length - 1))]}`;
    setShowPhrases([phrase, ...phrases]);
  }

  function clearList() {
    setShowPhrases([]);
  }

  return (
    <div className="wrapper">
      {phrases.length ? <Phrase text={phrases} /> : <EmptyBlock />}
      <button onClick={createPhrase} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clearList} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};

export default App;
