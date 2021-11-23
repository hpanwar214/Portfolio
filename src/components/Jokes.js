import React  ,{Component} from 'react'

class Jokes extends Component{
    state = {joke:{}}
    componentDidMount(){
        fetch('https://api.jokes.one/jod?category=animal')
            .then(response => response.json())
            .then(json => this.setState({joke : json.contents.jokes[0].joke}))
            .catch(error => (alert(error.message)));
    }
    render(){
        const {title,text} = this.state.joke
        return(
            <div>
                <h2>Highlighted joke</h2>
                <p>{title}</p>
                <p>{text}</p>
            </div>
        )
        
    }
}
export default Jokes