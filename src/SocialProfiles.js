import SOCIAL_PROFILES from "./data/socialProfiles.js";
import React ,{ Component} from "react";
 
class SocialProfile extends Component{
    render() {
        const {image,link} = this.props.socialProfile
        return (
            <span>
                <a href = {link} target="_blank"><img src={image} style={{width: 35 ,height:30,margin: 10}}/></a>
            </span>
        )
    }
}
class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <center>
                <center><h3>Connect with us</h3></center>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return(
                        <SocialProfile key = {SOCIAL_PROFILE.id} socialProfile= {SOCIAL_PROFILE}/>
                    )
                    
                })}
                </center>
            </div>
          
        )
    }
}
export default SocialProfiles