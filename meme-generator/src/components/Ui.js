import {useState, useEffect, useCallback} from 'react';

const Ui = () => {

// updating the state

const [url, setUrl ] = useState({})
const [meme, setMeme ] = useState([])




useEffect(()=>{
   fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data=> setMeme(data.data.memes))

}, [])



// function that brings a random image

const getAMeme = ()=>{
    const randomNum = Math.floor(Math.random() * meme.length)
    const url = meme[randomNum].url
    console.log(url)
    setUrl(prevUrl =>({
        ...prevUrl, 
        randomImage: url
    }))
   
}



    return (
        <div className = "ui">

                {/* form */}

                <div>

                    <input placeholder="Enter first sentence"></input>
                    <input placeholder="Enter second sentence"></input>
                    <button onClick={getAMeme}>Generate Meme</button>
            
                </div>               

                {/* meme image */}
                <div className="image">
                    <img src={url.randomImage} alt="cool" />
                </div>
            
        </div>
    );
}

export default Ui;