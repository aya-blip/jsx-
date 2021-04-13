

import './App.css';
import Profile from './Profil/Profile';
import {Col,Image} from 'react-bootstrap';


function App() {
  const styleObject={
    color:"darkred",
    textAlign:'center',
                
}
var fullName;
var bio="Welcome to my world";
var profession="Financier"
  const HandleName = name => alert(name);
  return (
    <div style={styleObject}>
  
  <Image    src={"Image.PNG"} style={{ width: "200px",borderRadius: "" }}></Image> 
    <Profile  name={fullName}  bio={bio}  profession={profession} HandleName={HandleName}/> 
  
               
     
   
  </div>
  );
}

export default App;