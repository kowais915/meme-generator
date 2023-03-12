import {useState } from 'react';


const Blog = () => {

const [showBlog, setShowBlog ] = useState(true);

const [list, setList ] = useState([
    {title: 'A cool blog by Owais ', id: 1 }, 

    {title: 'Another cool blog by Haris ', id: 2 }, 

    {title: 'The perks of being a caulflower ', id: 3 }, 

    {title: 'React is the coolest! ', id: 4 }
])
    
const del = (id )=>{

    setList(list.filter((item)=>{
        return id !== item.id
    }))

};


const show = ()=>{
    setShowBlog(true);
};


const hide = ( )=>{
    setShowBlog(false);
}



    return ( 


        <div className="blog">
           { !showBlog && <button onClick={show}>Show</button>}
           { showBlog && <button onClick={hide}>Hide</button>}
            <h2>Blog Page</h2>
            { showBlog && list.map((item )=>(

                <div>

                
                <h5>{item.title}</h5>
                <button onClick={( )=>{
                    del(item.id)
                }}>Delete</button>


                </div>
            ))}
        </div>
     );
}
 
export default Blog;
