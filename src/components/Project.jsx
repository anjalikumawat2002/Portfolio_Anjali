import projectData from "../Data/Project.json"
import Card from "./Card"
const Project=()=>{
    return(
        <>
        <div className="flex flex-wrap justify-center gap-2 pt-5 w-full">
            {
                projectData.map((item,index)=>{
                    return <Card key={index} image={item.image} title={item.title} data={item.data}  about={item.about} url={item.url}/>
                })
            }
        </div>
        
        </>
    )
}
export default Project;