import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

const hideCnt = {
    display: 'none'
}

const btnStyle = {
    marginTop: '300px',
    marginLeft: '50px',
    background: 'blue',
    width: '250px',
    height: '250px',
    border: 'none'
}

class Sounds extends Component{
    constructor(props){
        super(props)
        this.state = {
            cntIsVisible: false
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
                <button style={btnStyle}>ssssss</button>
            </div>
        )
    }
}
export default Sounds