import React ,{Component} from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles.js'
import profile from '../assets/myprofile.jpg'
import Title from './Title.js'

class App extends Component{
    state = {displayBio :false}
    
    toogleBioState = () => {
        this.setState({displayBio : !this.state.displayBio})
    }

    render(){
        return(
            <div>
                <img src = {profile} alt="profile image" className='profile'/>
                <h1>Hey Guys</h1>
                <p>I'm Harshit,and I am a <b> <Title/></b> </p>
                
                <p>Excited for this learning</p>
                {
                    this.state.displayBio ?(
                        <div>
                        <p>I am keen learner and explorer, trying to explore things in scietific manner</p>
                        <p> And my area of interest are technology, science and innovation</p>
                        <p>hope you find it cool!!</p>
                        <button onClick = {this.toogleBioState}>read less</button>
                    </div>
                    ) : ( <button onClick = {this.toogleBioState}> read more</button>)
                    
                }

                <hr />
                <Projects/>
                <hr />
                <SocialProfiles/>
            </div>
            
        )
    }
}
 export default App