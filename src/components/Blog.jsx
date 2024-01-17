import { Key } from "lucide-react"
import Card from "./Card"
import myData from "../Data/Blogs.json"

const Blog=()=>{
    // const myData=[
    //     {image:"/Blog1.png",title:"GUI in Python Using Tkinter",url:"https://dev.to/anjalikumawat2002/gui-in-python-using-tkinter-gfa"},
    //     {image:"/Blog2.png",title:"EOL : Python Syntax Error",url:"https://dev.to/anjalikumawat2002/eol-python-syntax-error-3fl0"},
    //     {image:"/Blog4.png",title:"Operator Overloading in C++",url:"https://medium.com/codex/operator-overloading-in-c-b9fa0b2fe96b"},
    //     {image:"/Blog3.png",title:"Python : OS Module",url:"https://dev.to/anjalikumawat2002/python-os-module-ccb"},
    //     {image:"/Blog5.png",title:"How to Overcome from TLE Error in competitive programming?",url:"https://dev.to/anjalikumawat2002/how-to-overcome-from-tle-error-in-competitive-programming-26p9"},
    //     {image:"/Blog6.png",title:"Image Comparison Slider Using CSS",url:"https://medium.com/@anjali2002kumawat/image-comparison-slider-using-css-edabf447e41c"},

    // ]
    return(
        <>
        <div className="flex flex-wrap justify-center gap-2 pt-5 w-full">
            {
            myData.map((item,index)=>{
                return <Card key={index} image={item.image} title={item.title} url={item.url}/>
            })
            }
        {/* <Card image={"/Blog1.png"} title={"GUI in Python Using Tkinter"} url={"https://dev.to/anjalikumawat2002/gui-in-python-using-tkinter-gfa"}/>
        <Card image={"/Blog2.png"} title={"EOL : Python Syntax Error"} url={"https://dev.to/anjalikumawat2002/eol-python-syntax-error-3fl0"}/>
        <Card image={"/Blog4.png"} title={"Operator Overloading in C++"} url={"https://medium.com/codex/operator-overloading-in-c-b9fa0b2fe96b"}/>
        <Card image={"/Blog3.png"} title={"Python : OS Module"} url={"https://dev.to/anjalikumawat2002/python-os-module-ccb"}/>
        <Card image={"/Blog5.png"} title={"How to Overcome from TLE Error in competitive programming?"} url={"https://dev.to/anjalikumawat2002/how-to-overcome-from-tle-error-in-competitive-programming-26p9"}/>
        <Card image={"/Blog6.png"} title={"Image Comparison Slider Using CSS"} url={"https://medium.com/@anjali2002kumawat/image-comparison-slider-using-css-edabf447e41c"}/> */}
        </div>
        </>
    )
}
export default Blog