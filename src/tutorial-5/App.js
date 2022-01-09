import React from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import adjectivesArr from "./adjectivesArr";
import nounsArr from "./nounsArr";

import "./App.css";

const App = () => {
  const [phrases, setPhrases] = React.useState([]);

  function createPhrase() {
    const phrase = `${
      adjectivesArr[Math.floor(Math.random() * (adjectivesArr.length - 1))]
    } ${
      adjectivesArr[Math.floor(Math.random() * (adjectivesArr.length - 1))]
    } ${nounsArr[Math.floor(Math.random() * (nounsArr.length - 1))]}`;
    setPhrases([phrase, ...phrases]);
  }

  function clearList() {
    setPhrases([]);
  }

  if (phrases.length > 0) {
    return (
      <div className="wrapper">
        <div className="list">
          {phrases.map((phrase, index) => (
            <Phrase key={index} text={phrase} />
          ))}
        </div>
        <button onClick={createPhrase} className="btn btn_generate">
          Сгенерировать
        </button>
        <button onClick={clearList} className="btn btn_clear">
          Очистить
        </button>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <EmptyBlock />
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
