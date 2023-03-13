import {useState, useEffect, useCallback} from 'react';

const Ui = () => {

// updating the state

const [url, setUrl ] = useState({})
const [meme, setMeme ] = useState([])
const [upperText, setUpperText] = useState('')
const [lowerText, setLowerText ] = useState('');




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

    setUpperText('')
    setLowerText('')
   
}

const handleChange = (e) =>{

    e.preventDefault()
    setUpperText(e.target.value)
}



    return (
        <div className = "ui">

                {/* form */}

                <div>

                    <input placeholder="Enter first sentence" onChange={e=>setUpperText(e.target.value) } value={upperText}/>
                    <input placeholder="Enter second sentence" onChange={e=>setLowerText(e.target.value)} value={lowerText}></input>
                    <button onClick={getAMeme}>Generate Meme</button>
            
                </div>               

                {/* meme image */}
                <div className="image">
                    <h2 className='upper'>{upperText}</h2>
                    <img src={url.randomImage} alt="cool" />
                    <h2 className='lower'>{lowerText}</h2>
                </div>
            
        </div>
    );
}

export default Ui;