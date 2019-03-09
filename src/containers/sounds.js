import React, {Component} from 'react';
import '../App.css';

const hideCnt = {
    display: 'none'
}

class Sounds extends Component{
    constructor(props){
        super(props)
        this.state = {
            cntIsVisible: false,
        }
    }

    clickMoreSounds(){
        this.setState({
            cntIsVisible: true
        })
    }
    
    hideCnt(){
        this.setState({
            cntIsVisible: false
        })
    }


    render(){
        const{cntIsVisible} = this.state;
        return(
            <div style={cntIsVisible?null:hideCnt}>
            </div>
        )
    }
}
export default Sounds