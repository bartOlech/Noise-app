import React, {Component} from 'react';
// import styled from 'styled-components';
import '../App.css';

const hideCnt = {
    display: 'none'
}

const fade = {
    opacity: '0.1'
}

const border = {
    border: 'none'
}

const svgStyle = {
    visibility: 'hidden',
    position: 'absolute',
    width: 0,
    height: 0
}

class Sounds extends Component{
    constructor(props){
        super(props)
        this.state = {
            cntIsVisible: false,
            menuBtnIsCheck: false
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

    fadeView(){
        this.setState({
            menuBtnIsCheck: !this.state.menuBtnIsCheck
        })
    }

    render(){
        const{cntIsVisible, menuBtnIsCheck} = this.state;
        return(
            <div style={cntIsVisible?null:hideCnt}>
                <div style={menuBtnIsCheck?fade:null}>
                <div className="wrapperSounds">
                      <button className='more-sounds-btn'>
                        <span className='internal-el-btn'>ico</span>
                      Example
                      </button>

                      <button className='more-sounds-btn'>
                        <span className='internal-el-btn'>ico</span>
                      Example
                      </button>

                      <button className='more-sounds-btn'>
                        <span className='internal-el-btn'>ico</span>
                      Example
                      </button>
                      
                      <button className='more-sounds-btn'>
                        <span className='internal-el-btn'>ico</span>
                      Example
                      </button>
                </div>
                </div>
            </div>
        )
    }
}
export default Sounds