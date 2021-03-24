
import './App.css';
import './style.css';
import MyImageInSrc from "./imageInSrc.jpg";
import React from 'react';


function App() {
  return (
    <div className="App">
    <div style={{border:"solid 1px black",maxWidth:'100vw'}}>  
    <h1 className="title red">Aya Rjiba</h1>
    <br/>
    <img src="/imageInPublic.jpg" alt="myimage" />

    <br/>
    <img src={MyImageInSrc }/>
    </div>
    <video width="750" height="500" controls >
      <source src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"} type="video/mp4"/>
     </video>




      
      
    
    
      
    </div>

  );
}

export default App;
