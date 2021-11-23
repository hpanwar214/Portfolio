import React ,{Component} from 'react'
import '../index.css'

const TITLE = ['Sofware developer', 'Engineer', 'Gardening enthusiast', 'Explorer' ]

class Title extends Component{
    state = {titleIndex : 0 , fadeIn : true};
    componentDidMount(){
        this.timeout = setTimeout(()=>{this.setState({fadeIn:false})},1000)
        this.animateTitle();
    };
    componentWillUnmount(){
        clearInterval(this.titileInterval)
        clearTimeout(this.timeout)
    }
    animateTitle = () => {
        this.titileInterval = setInterval(() => {
            const index =(this.state.titleIndex +1) %  TITLE.length;
            this.setState({titleIndex : index,fadeIn :true})
            this.timeout = setTimeout(()=>{this.setState({fadeIn:false})},1000)
        },2000)
        
    };
    render(){
        const {titleIndex,fadeIn} = this.state
        const title = TITLE[titleIndex]
        return(
            <div className = {fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</div>
        )
    }
}
export default Title;