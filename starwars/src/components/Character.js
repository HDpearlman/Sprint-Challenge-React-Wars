// Write your Character component here
import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
display:flex;
border:2px solid black;
background-color:white;
width:25%;
margin:auto;
justify-content:center;
`;

const characterCard = props =>{
    console.log(props)
    
    return (
        <CardDiv><h1>name</h1></CardDiv>
           
          
        
    )
}

export default characterCard