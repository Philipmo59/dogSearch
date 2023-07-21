import React from "react"
import DogCard from "./DogCard"

export default function DogContainer({letDogs}){
    if (letDogs.length === 0) return <h1>Loading....</h1>
    const dogTitles = letDogs.message.map((dog)=><DogCard image={dog}></DogCard>)
    console.log(letDogs)
    return(
        <div>
          {dogTitles}
        </div>

    )
}