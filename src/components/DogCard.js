import React from "react";

export default function DogCard({image}){
    return(
        <div>

            <img src={image} alt='dogImages' key={`${Math.random()}`}/>  
        </div>
    )
}