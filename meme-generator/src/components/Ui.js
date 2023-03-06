import {useState} from 'react';

const Ui = () => {
const [count, setCount] = useState(0);

function counter(){
  setCount(count + 1);
}

    return (
        <div className = "ui">

              <form>

                    <input placeholder="Enter first sentence"></input>
                    <input placeholder="Enter second sentence"></input>
                </form>
                
               <div>
               <button onClick={counter}>Generate Meme</button>
               </div>

               <div className="counter">
                {count}
               </div>
                
       
            
            
        </div>
    );
}

export default Ui;