import Typewriter from 'react-ts-typewriter';
import {Linkedin} from 'lucide-react';
import { Mail } from 'lucide-react';
import { Link} from 'react-router-dom';
import { Github } from 'lucide-react';
import { useState } from 'react';
import Card_Experience from './Card_Experience';
import ExperienceData from '../Data/Experience.json'

const About=()=>{
  const [status,setstatus]=useState(false)
  
return(
<>
<p className="text-3xl px-7 py-6">Hi 👋, <Typewriter text="I'm Anjali Kumawat." /></p>
<div className='flex justify-between bg-base-500 flex-col-reverse md:flex-row'>
  
<div className='text-xl px-7'>


<p className='font-normal text-base py-3 text-justify'>I'm Anjali Kumawat, a final-year engineering undergrad and a skilled programmer specializing in web development.I am a software engineer with experience in technologies like React, .net, Python, C++, HTML & CSS, SQL, I have hands-on experience in coding, designing, and extending web applications and fields like traffic routing, Fullstack developing, efficient implimentations of c++ & Python. Beyond development, I am passionate about open source, actively contributing, and regularly sharing technical insights through my blogs on dev.to. and medium.</p>

<p className="text-xl font-semibold underline">EXPERIENCE</p>
<div className="flex flex-wrap gap-2 pt-2 w-full">
            {
                ExperienceData.map((item,index)=>{
                    return <Card_Experience key={index} title={item.title} date={item.date}  about={item.about}/>
                })
            }
        </div>
      <div className="flex justify-center mt-5 align-middle pb-5">
            <a
              href="https://drive.google.com/file/d/19kuJF6WEqOCfjJ8cGOnblOs-3__By18Y/view?usp=drive_link"
              target='_blank'
              className="mx-3 inline-flex text-white bg-secondary items-center border-0 py-3 px-6 focus:outline-none rounded text-lg">
              Resume
            </a>
            <a
              href="https://docs.google.com/document/d/1aklO1ZRXc1kcegJXpmoKGYvEQYN86qN6/edit?usp=sharing&ouid=111612138581294473821&rtpof=true&sd=true"
              target='_blank'
              className="ml-5 inline-flex bg-orange-400 border-0 py-3 px-6 focus:outline-none text-white rounded text-lg">
              Cover Letter
            </a>
          </div>
</div>   

<div className='p-10'>
    <img className='w-100 h-100 object-contain rounded-se-3xl' src='/avtar.png' alt=''/>
    <div className="flex justify-center">
    <Link className="ps-3 py-5 hover:scale-125 transition-transform" to='https://www.linkedin.com/in/anjali-kumawat-1783ba200/' target="_blank"><Linkedin/></Link>
    <Link className="px-4 py-5 hover:scale-125 transition-transform" to='https://mail.google.com/mail/?view=cm&fs=1&to=anjali2002kumawat@gmail.com' target="_blank"><Mail /></Link>
    
    <a className="px-3 py-5" href='https://medium.com/@anjali2002kumawat' target="_blank">
              <img className='w-8 hover:scale-125 transition-transform' src="/medium.png" alt=''/>
    </a>   
    <a className="px-3 py-4" href='https://dev.to/anjalikumawat2002' target="_blank">
              <img className='w-10 h-10 hover:scale-125 transition-transform' src="/dev-dot-to.png" alt=''/>
    </a>    
    <Link className="px-3 py-5 hover:scale-125 transition-transform" to='https://github.com/anjalikumawat2002' target="_blank"> <Github /></Link>
   
    </div>
</div>
</div>
{/* <div>
  {
    status? <h1>Hello</h1>:null
  } */}
  {/* <button onClick={()=>setstatus(false)}>Hide</button>
  <button onClick={()=>setstatus(true)}>Show</button> */}
  {/* <button onClick={()=>setstatus(!status)}>toggle</button>
</div> */}
</>
)
}
export default About;