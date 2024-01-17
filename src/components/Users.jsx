import { useEffect, useState } from "react"


function Users(){
// https://dummyjson.com/users
//https://dummyjson.com/products
    const [count, setCount] = useState(0)
    const [store_data,setdata]=useState([])
    const[store_product,setproduct]=useState([])
    const[show_user,setshow]=useState(false)
    async function getUsers(){
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        setdata(data);
    }
    async function getproduct(){
        const response1=await fetch("https://dummyjson.com/products");
        const product=await response1.json();
        setproduct(product);
    }

    useEffect(()=>{
        //getUsers();
        getproduct();
    }, [])
    
    
 return(
 <>
 {count}
 <button onClick={()=>{setCount(prev=>prev+1)}}>incr</button>
 <div>
    <button onClick={()=>{setshow(prev=>!prev)}}>SHOW USER</button>
    {/*condition && <>your component</> */}
    {<p>USER NAME</p>}
    {(show_user)&& <h1>Anjali</h1>}
 </div>
 
 {/* {JSON.stringify(store_data)} */}
 </>) 
}

export default Users