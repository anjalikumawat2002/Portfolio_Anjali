import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const Card=({image,title,data,about,url,read})=>{
    const [topvalue,settopvalue]=useState("110%");
    const containerRef=useRef();
    useEffect(()=>{
        containerRef.current.addEventListener("mouseover",()=>{
            settopvalue("50%")
        });
        containerRef.current.addEventListener("mouseout",()=>{
            settopvalue("110%")
        });
    },[]);
    return(
        <>
        <div className="border rounded-md shadow-md p-4 m-2 w-fit bg-base-200 flex flex-col relative overflow-hidden" ref={containerRef}>
            <div>
                <img className="w-[275px] aspect-video object-cover" src={image} alt="blog" />
            </div>
            <div className="text-xl font-bold p-2 text-wrap break-words max-w-[275px]">
                {title}
            </div>
            <div className="text-[14px] p-2 text-wrap break-words max-w-[275px]">
                {data}
            </div>
            <div className="text-xs text-grey-400 font-light p-2 text-wrap break-words max-w-[275px]">
                {about}
            </div>
            <div className="font-bold text-lg absolute left-0 right-0 bottom-0 transition-[top] duration-700" style={{top:topvalue}}>
                <Link className="flex justify-center items-center w-full h-full text-center btn glass" to={url} target="_blank">visit</Link>
            </div>
            <div className="text-[14px] p-2 pt-[1px] text-justify text-wrap break-words max-w-[275px]">
                {read}
            </div>
        </div>
        </>
    )
}
export default Card
