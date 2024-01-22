import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';
import { useRef } from 'react';

const Contact = ()=>{
    const form = useRef();
    async function sendEmail(e){
        e.preventDefault()
        try{
          const response = await emailjs.sendForm('service_e3nvizg', 'template_j1ahfed', form.current, 'KtHazvNRONx6lmh3y')
          toast.success("Email sent Successfully!") 
          form.current.reset() 
        }
        catch(error){
            toast.error("Oops!!Try again.")
        }
    }
    return(
        <>
        
            <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-center py-4">
                <h1 className="text-3xl font-semibold underline">Get in touch</h1>
            </div>
            <div className="flex justify-center gap-8 py-7 max-w-[1080px] items-center mx-auto px-3 flex-wrap">
            <div className="flex flex-col flex-1">
                <label htmlFor="name" className="block font-bold py-2">Name</label>
                <input type="text"id="name" name="from_name" className="p-3 flex-1 rounded border border-primary" required placeholder="Name"></input>
            </div>
            <div className="flex flex-col flex-1">
                <label htmlFor="mail" className="block font-bold py-2">E-mail</label>
                <input type="text"id="mail" name="from_email" className="p-3 flex-1 rounded border border-primary" required placeholder="E-Mail"></input>
            </div>
            </div>
            <div className="gap-8 py-7 max-w-[1080px] mx-auto px-3 flex justify-center flex-col w-full">
          <label htmlFor="msg" className="block font-bold py-2">
            Message
          </label>
          <textarea name="message" id="msg" className="p-3 resize-none rounded border border-primary" required placeholder="Your message" cols="30" rows="5"></textarea>
          
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white flex justify-center items-center border-0 py-3 px-6 rounded-sm mx-auto">
            Send
        </button>
            </form>
        </>
    )
}

export default Contact;