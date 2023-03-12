
import Nav from "./components/Nav";
import Ui from "./components/Ui";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// importing components here
import Blog from './components/Blog';


function App() {
  return (
<div>
     <BrowserRouter>
          <Routes>
            <Route 
              path="/"
              element = {[ <Nav/>,<Ui/>]}
            
            
            />

            <Route
              path="/blog"
              element ={<Blog/>}
            
            />

          </Routes>
     
     
     
     
     </BrowserRouter>
      
  
  

</div>
   

  );
}

export default App;
