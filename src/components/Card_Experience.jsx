import { useEffect, useRef, useState } from "react"

const Card_Experience=({title,date,about})=>{
    
    const containerRef=useRef();

    return(
        <>
        <div className="border rounded-md shadow-md flex flex-col items-center justify-center p-4 m-2 w-fit bg-base-200  relative overflow-hidden" ref={containerRef}>
            
            <div className="text-xl font-bold p-2 text-wrap break-words max-w-[275px]">
                {title}
            </div>
            <div className="text-[14px] p-2 text-wrap break-words max-w-[275px]">
                {date}
            </div>
            <div className="text-xs text-grey-400  text-justify font-light p-2 text-wrap break-words max-w-[275px]">
                {about}
            </div>
        </div>
        </>
    )
}
export default Card_Experience;
