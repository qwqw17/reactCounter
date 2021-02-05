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
    let audio = new Audio("beep.aiff");
    if (img.localeCompare(iPlay)) {
      setqw(setInterval(() => {
        audio.play();
      }, 60000))
    }
    else {
      clearInterval(qw);
    }
  },[img])


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
    setPos((prevPos)=>prevPos+1);
  }

  let decrementPos = () => {
    setPos((prevPos) => prevPos - 1);
  }

  let incrementNeg = () => {
    setNeg((prevNeg) => prevNeg + 2);
  }

  let decrementNeg = () => {
    setNeg((prevNeg) => prevNeg - 2);
  }
  
  return (
    <div className="App">
      <div className="pos" onClick={incrementPos}>{pos}</div>
      <div>
        {(pos*100)/(pos-neg)}
      </div>
      <div className="pp">
        <img src="white.jpg" className="white" onClick={decrementPos} />
        <img src={img} className="img" onClick={toggle} />
        <img src="black.jpeg" className="white" onClick={incrementNeg} />
      </div>
      <div className="neg" onClick={decrementNeg}>{neg}</div>
    </div>
  );
}

export default App;
