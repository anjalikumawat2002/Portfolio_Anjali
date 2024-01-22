import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navabar=()=>{
    const [ismobileview, setisMobileview]=useState(false);
    const [show, setshow]=useState(false);
    
    useEffect(()=>{
        function Handleresize(){
            if(window.innerWidth<810){
                setisMobileview(true);
             }
             else{
                 setisMobileview(false);
             }
        }
        window.addEventListener("resize",Handleresize);
        Handleresize();
    },[]);

    

    if(ismobileview===true){
        return(
            <>
            <nav className="p-3 shadow-md bg-base-100 ">
                <div className="flex items-center justify-between">
                <div className="flex items-center font-bold text-xl gap-3">
                    <img className='w-16 h-16 object-contain rounded-full'src='/avtar.png' alt=""></img>
                    <h1>Anjali Kumawat</h1>
                </div>
                <div>
                    
                    <button onClick={()=>{setshow(!show)}}>{
                       show? <X />:<Menu />
                    }</button>
                {/* <button onClick={()=>{setshow(()=>{
                    if(show===true){
                        return false;
                    }
                    else{
                        
                        return true;
                    }
                })}}>{show? <X />:<Menu />}</button> */}
                
                </div>
                
                </div>
                
            </nav>
            {
                
                <div className="flex flex-col font-bold text-xl px-4 overflow-hidden transition-[height] duration-500" style={{height: show?250:0}}>
                <Link className="border-b-2 p-4" to={'/'}>About</Link>
                <Link className="border-b-2 p-4" to={'/Project'}>Project</Link>
                <Link className="border-b-2 p-4" to={'/Blog'}>Blogs</Link>
                <Link className="border-b-2 p-4" to={'/contact'}>Contact</Link>
                </div>
                

            }
            
        </>
        )
    }
    return(
        <nav className="p-3 bg-base-100 shadow-md">
            <div className="flex items-center justify-between">
            <div className="flex items-center font-bold text-xl gap-3">
               <img className='w-16 h-16 object-contain rounded-full'src='/avtar.png' alt=""></img>
               <h1>Anjali Kumawat</h1>
               
            </div>
            {/* <div className="flex items-center">
                <input className="shadow-md p-3 w-[300px] rounded-l-full outline-none border-2 border-gray-200" type="text" placeholder="Search" />
                <button className="border-2 rounded-r-full p-3 shadow-md border-l-0"><Search /></button>
            </div> */}
            <div className="font-bold text-lg flex gap-5">
                <Link to={'/'}>About</Link>
                <Link to={'/Blog'}>Blogs</Link>
                <Link to="/Project">Project</Link>
                <Link to="/contact">Contact</Link>
            </div>
            
            </div>
            {/* <span 
            style={{transform:'translateX(${100-100}%)'}}
                className="absolute bg-blue-500 h- w-full top-24"
            /> */}
           
           
        </nav>
    );
}
export default Navabar;