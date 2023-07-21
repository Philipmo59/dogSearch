import React from "react";

export default function SearchDog({setUrl}){
    function handleSubmit(event){
        event.preventDefault()
        const newBreed = event.target[0].value
        console.log(newBreed)
        setUrl([newBreed])
    }

    return(
        <form className="searchDog" onSubmit={handleSubmit}>
            <label>
                Search a New breed
                <input type="text" name="name"/>
            </label>
            <button>Submit</button>
        </form>
    )
}