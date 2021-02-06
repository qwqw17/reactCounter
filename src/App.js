import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [qw, setqw] = useState(null)

  const [pos, setPos] = useState(0)
  const [neg, setNeg] = useState(0)

  const iPlay = "play.png";
  const iPause = "pause.jpg";

  const [img, setImg] = useState(iPlay)

  useEffect(() => {
    console.log("called!!")
    let audio = new Audio("beep.mp3");
    if (img.localeCompare(iPlay)) {
      setqw(setInterval(() => {
        audio.play();
      }, 60000))
    }
    else {
      clearInterval(qw);
    }
  },[img])

  useEffect(() => {
    if(localStorage.getItem('pos')){
      setPos(parseInt(localStorage.getItem('pos')))
    }
    if (localStorage.getItem('neg')) {
      setNeg(parseInt(localStorage.getItem('neg')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pos', parseInt(pos));
    localStorage.setItem('neg', parseInt(neg));
  }, [pos, neg])

  let toggle = ()=>{
    setImg((prevImg)=>{
      if (!prevImg.localeCompare(iPlay)){
        return iPause;
      }
      else{
        return iPlay;
      }
    })
  }
  
  let incrementPos = ()=>{
    console.log("ip");

    setPos((prevPos)=>prevPos+1);
  }

  let decrementPos = () => {
    console.log("dp");
    setPos((prevPos) => prevPos - 2);
  }

  let incrementNeg = () => {
    setNeg((prevNeg) => prevNeg + 4);
  }

  let decrementNeg = () => {
    setNeg((prevNeg) => prevNeg - 2);
  }
  
  return (
    <div className="App">
      <div className="pos" onClick={incrementPos}>
        <div className="npos">{pos}</div>
        <div className="per">{parseInt((pos * 10000) / (pos - neg)) / 100}</div>
        <img src="black.jpg" className="antipos" onClick={decrementPos} />
      </div>
      <div className="neg" onClick={decrementNeg}>
        <div className="nval">{neg}</div>
        <img src="white.jpeg" className="antineg" onClick={incrementNeg} />
      </div>
      <div className="pp">
        {/* <img src="black.jpg" className="antipos" onClick={decrementPos} /> */}
        <img src={img} className="img" onClick={toggle} />
        {/* <img src="white.jpeg" className="antineg" onClick={incrementNeg} /> */}
      </div>
    </div>
  );
}

export default App;
