import Typewriter from 'react-ts-typewriter';
import {Linkedin} from 'lucide-react';
import { Mail } from 'lucide-react';
import { Link} from 'react-router-dom';
import { Github } from 'lucide-react';
import { useState } from 'react';


const About=()=>{
  const [status,setstatus]=useState(false)
  
return(
<>
<div className='flex justify-between bg-base-500 h-screen'>
  
<div className='text-xl px-7 py-7 text-primary dark:text-neutral'>
<p className="text-3xl">Hi 👋, <Typewriter text="I'm Anjali Kumawat." /></p>
<br></br>
<p className='font-normal text-base text-justify'>I'm Anjali Kumawat, a final-year engineering undergrad and a skilled programmer specializing in web development.I am a software engineer with experience in technologies like React, .net, Python, C++, HTML & CSS, SQL, I have hands-on experience in coding, designing, and extending web applications and fields like traffic routing, Fullstack developing, efficient implimentations of c++ & Python. Beyond development, I am passionate about open source, actively contributing, and regularly sharing technical insights through my blogs on dev.to. and medium.</p>
<br></br>
<p>Who I am</p>
          <br></br>
          <ul className="list-disc list-inside">
        <li>
          <span role="img" aria-label="Star">🌟</span> Ex Microsoft Intern
        </li>
        <li>
          <span role="img" aria-label="Seedling">🌱</span> I'm a Web Developer with experience in MERN stack and ASP.NET.
        </li>
        <li>
          <span role="img" aria-label="Note">📝</span> I regularly write articles on <a href="https://dev.to/anjalikumawat2002" className="link link-success" target="_blank" rel="noopener noreferrer">dev.to/anjalikumawat2002</a> and <a href="https://medium.com/@anjali2002kumawat" className="link link-success" target="_blank" rel="noopener noreferrer">medium.com/@anjali2002kumawat</a>
        </li>
      </ul>
      <div className="flex justify-center mt-20 ml-20">
            <a
              href="https://drive.google.com/file/d/1LAJWAyk6fvTbZxmNEwjVaNjxD6JSTmwx/view"
              className="mx-3 inline-flex text-white bg-secondary  border-0 py-3 px-6 focus:outline-none rounded text-lg">
              Resume
            </a>
            <a
              href=""
              className="ml-5 inline-flex bg-orange-400 border-0 py-3 px-6 focus:outline-none text-white rounded text-lg">
              Cover Letter
            </a>
          </div>
</div>   

<div className='py-20 px-20'>
    <img className='w-100 h-100 object-contain rounded-se-3xl' src='/avtar.png' alt=''/>
    <div className="flex justify-center">
    <Link className="ps-3 py-5" to='https://www.linkedin.com/in/anjali-kumawat-1783ba200/' target="_blank"><Linkedin/></Link>
    <Link className="px-4 py-5" to='https://mail.google.com/mail/?view=cm&fs=1&to=anjali2002kumawat@gmail.com' target="_blank"><Mail /></Link>
    
    <a className="px-3 py-5" href='https://medium.com/@anjali2002kumawat' target="_blank">
              <img className='w-8' src="/medium.png" alt=''/>
    </a>   
    <a className="px-3 py-4" href='https://dev.to/anjalikumawat2002' target="_blank">
              <img className='w-10 h-10' src="/dev-dot-to.png" alt=''/>
    </a>    
    <Link className="px-3 py-5" to='https://github.com/anjalikumawat2002' target="_blank"> <Github /></Link>
   
    </div>
</div>
</div>
<div>
  {
    status? <h1>Hello</h1>:null
  }
  {/* <button onClick={()=>setstatus(false)}>Hide</button>
  <button onClick={()=>setstatus(true)}>Show</button> */}
  <button onClick={()=>setstatus(!status)}>toggle</button>
</div>
</>
)
}
export default About;