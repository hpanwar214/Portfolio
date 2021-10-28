import React ,{Component} from "react";
import PROJECTS from "./data/projects.js";

class Project extends Component{


    render(){
        const {title,description,image,link} = this.props.project;

        return(
            <div style={{margin:10,width:300,display:"inline-block"}}>
                <h3>{title}</h3>
                <img src = {image} alt='project image' style={{width:200,height:120}}/>
                <p>{description}</p>
                <a href = {link} >{link}</a>
            </div>
        )
    }
}
class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                             <Project key = {PROJECT.id} project = {PROJECT} />
                    )
                    })
                }
            </div>
        )
    }
}
export default Projects;