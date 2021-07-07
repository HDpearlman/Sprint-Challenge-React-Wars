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

// const characterCard = props =>{
//     console.log(props)
    
//     if(props.data.results !== undefined){
        
    
//     return (
//         props.data.results.map(object =>{
//             return <CardDiv><h1>{object.name}</h1></CardDiv>
//         })
        
//     )}

//     else{ return null}
    
// }
    


const characterCard = props =>{

    return(
        <div>{props.data && props.data.results.map((object, index) =>{
            return <CardDiv key={index}><h1>{object.name}</h1></CardDiv>
        })}</div>
    )
}

export default characterCard