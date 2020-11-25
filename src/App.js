import React from "react";
import './styles.css'
import mypic from "./jeeptrackhawk.jpg"


function App() {
  return (
    <div className="first">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Slim</h1>
      <br />
      <img src={mypic} style={{maxWidth: '400px'}} alt= 'mypic'/>
      <br />
      <img src="./dodge.jpg" style={{maxWidth: '400px'}} />
    </div>
    <video width={320} height={240} controls >
    <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={`https://www.youtube.com/watch?v=GYAiOuE56R8`}
        frameBorder="0"
      />
    </video>
    </div>
  );
}

export default App;
