
import React from 'react';
import './Profil.css';
import {Navbar,Nav,FormControl,Button,Accordion,Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import { defaultProps } from 'default-props'

function Profile (props) {
    
    return  <div className="body">
  
     <h1 className="name">{props.name} </h1> <h1 className="bio"> {props.bio} </h1> <h1 className="prof" > {props.profession} </h1> <h2 className="img">{props.children}</h2> 
      <button class="btn btn-danger" onClick={() => props.HandleName(props.name)}>
    Show My name !
    </button>
 

    </div>
   }
 
 Profile.defaultProps = {
    name: "Aya Rjiba",
   
   };
   
   Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string

  };

export default Profile