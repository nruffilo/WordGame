import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function App() {
  const [points, setPoints] = useState(1000);
  const [usableLetters, setUsableLetters] = useState([]);

  const letterArray = [
    {letter: "a", pointValue: 10, used: false, order:null},
    {letter: "b", pointValue: 10, used: false, order:null},
    {letter: "c", pointValue: 10, used: false, order:null},
    {letter: "d", pointValue: 10, used: false, order:null},
    {letter: "e", pointValue: 10, used: false, order:null},
    {letter: "f", pointValue: 10, used: false, order:null},
    {letter: "g", pointValue: 10, used: false, order:null},
    {letter: "h", pointValue: 10, used: false, order:null},
    {letter: "i", pointValue: 10, used: false, order:null},
    {letter: "j", pointValue: 10, used: false, order:null},
    {letter: "k", pointValue: 10, used: false, order:null},
    {letter: "l", pointValue: 10, used: false, order:null},
    {letter: "m", pointValue: 10, used: false, order:null},
    {letter: "n", pointValue: 10, used: false, order:null},
    {letter: "o", pointValue: 10, used: false, order:null},
    {letter: "p", pointValue: 10, used: false, order:null},
    {letter: "q", pointValue: 50, used: false, order:null},
    {letter: "r", pointValue: 10, used: false, order:null},
    {letter: "s", pointValue: 10, used: false, order:null},
    {letter: "t", pointValue: 10, used: false, order:null},
    {letter: "u", pointValue: 10, used: false, order:null},
    {letter: "v", pointValue: 10, used: false, order:null},
    {letter: "w", pointValue: 10, used: false, order:null},
    {letter: "x", pointValue: 10, used: false, order:null},
    {letter: "y", pointValue: 10, used: false, order:null},
    {letter: "z", pointValue: 20, used: false, order:null},
  ];

  const toggleLetter = (letter) => {
    let newState = !letter.used;
    let newLetters = [...usableLetters];
    let found = false;
    newLetters.forEach(item => {
      if (!found && item.letter === letter.letter && item.used === letter.used) {
        if (newState) {
          item.order = newLetters.filter(e => e.order !== null).length;          
        } else {
          item.order = null;
        }
        item.used = newState;
        found = true;
      }
    }); 

    console.log("New Letters: ", newLetters);

    setUsableLetters(newLetters);
  }
  const getRandomLetter = () => {
    return {...letterArray[getRandomInt(letterArray.length)]};
  }
  useEffect(() => {
    let newLetters = [];
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());
    newLetters.push(getRandomLetter());

    setUsableLetters(newLetters);
  }, []
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Game!</h1>
        <p>Points: {points}</p>
        <div className="letter_selection">
        {
          (usableLetters.length > 0) ? usableLetters.map(letter => {
            return <div onClick={() => {toggleLetter(letter)}} className={"letter_container " + (letter.used ? "letter_used" : "")}>
                <div className="letter">{letter.letter}</div>
                <div className="letter_value">{letter.pointValue}</div>
              </div>
          })
          : <></>
        }
        </div>
        <div className="letter_results">
          {
          (usableLetters.filter(e=>e.order !== null).length > 0) ?
            usableLetters.filter(e=>e.order !== null).sort(e =>e.order).map(displayLetter => {
                return <div className={"letter_container "}>
                <div className="letter">{displayLetter.letter}</div>
                <div className="letter_value">{displayLetter.pointValue}</div>
              </div>
              })
            : 
            <></>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
