import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [qw, setqw] = useState(null)

  const [pos, setPos] = useState(parseInt(localStorage.getItem('pos')) || 0)
  const [neg, setNeg] = useState(parseInt(localStorage.getItem('neg')) || 0)

  const iPlay = "play.png";
  const iPause = "pause.jpg";

  const [img, setImg] = useState(parseInt(localStorage.getItem('img')) || iPlay)

  const [ctr, setCtr] = useState(parseInt(localStorage.getItem('ctr')) || -1)

  useEffect(() => {
    if (localStorage.getItem('pos')) {
      setPos(parseInt(localStorage.getItem('pos')))
    }
    if (localStorage.getItem('neg')) {
      setNeg(parseInt(localStorage.getItem('neg')))
    }
    if (localStorage.getItem('ctr')) {
      setCtr(parseInt(localStorage.getItem('ctr')))
    }
    if (localStorage.getItem('img')) {
      setImg(localStorage.getItem('img'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pos', parseInt(pos));
    localStorage.setItem('neg', parseInt(neg));
    localStorage.setItem('ctr', parseInt(ctr));
    localStorage.setItem('img', img);
    // localStorage.setItem('qw', qw)
    // alert(localStorage.getItem('ctr'));
    // alert(localStorage.getItem('img'));
  }, [pos, neg, ctr, img])

  useEffect(() => {
    let audio = new Audio("beep.mp3");
    let audio2 = new Audio("beep3.mp3");
    let audio3 = new Audio("beep4.mp3");
    if(ctr < 0){

    }
    else if(ctr%35){
      setqw(
        setTimeout(() => {
          audio.play();
          // alert("work")
          setCtr(pCtr => pCtr + 1)
        }, 1000)
      )
    }
    else if(ctr%140 === 0){
      // audio2.play();
      setqw(
        setTimeout(() => {
          audio2.play();
          // alert("long break");
          setCtr(pCtr=>pCtr+1)
        }, 1000)//900000);
      )
    }
    else{
      // audio3.play();
      setqw(
        setTimeout(() => {
          audio3.play();
          // alert("short break")
          setCtr(pCtr => pCtr + 1)
        }, 1000)//300000);
      )
    }
    // alert(qw);
    // alert(JSON.stringify(qw));
  }, [ctr])

  useEffect(() => {
    if (img === iPause) {
      setCtr(()=>{
        if (localStorage.getItem('ctr') && localStorage.getItem('ctr') > 0){
          return localStorage.getItem('ctr');
        }
        else{
          return 1;
        }
      })
    }
    else{
      setCtr(-1)
      clearTimeout(qw);
    }
  },[img])

  let toggle = ()=>{
    setImg((prevImg)=>{
      return iPause
    })
  }
  
  let incrementPos = ()=>{
    setPos((prevPos)=>prevPos+1);
  }

  let decrementPos = () => {
    setPos((prevPos) => prevPos - 2);
  }

  let incrementNeg = () => {
    setNeg((prevNeg) => prevNeg + 4);
  }

  let decrementNeg = () => {
    setNeg((prevNeg) => prevNeg - 2);
  }

  let reset = () => {
    setPos(-1);
    setNeg(0);
    setImg(iPlay);
  }
  
  return (
    <div className="App">
      <div className="pos" onClick={incrementPos}>
        <div onClick={reset} className='reset'>Reset</div>
        <div className="npos">{pos}</div>
        <div className="per">{parseInt((pos * 10000) / (pos - neg)) / 100}</div>
        <img src="black.jpeg" className="antipos" onClick={decrementPos} />
      </div>
      <div className="neg" onClick={decrementNeg}>
        <div className="nval">{neg}</div>
        <img src="white.jpg" className="antineg" onClick={incrementNeg} />
      </div>
      <div className="pp">
        <img src={img} className="img" onClick={toggle} />
      </div>
      
    </div>
  );
}

export default App;
