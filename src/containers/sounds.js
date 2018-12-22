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
                    <button className="sounds-btn ">Hover me!</button>
                    <button className="sounds-btn ">Hover me!</button>
                    <button className="sounds-btn ">Hover me!</button>
                    <button className="sounds-btn ">Hover me!</button>
                </div>
                    <svg style={{visibility: 'hidden', position: 'absolute'}} width={0} height={0}>
                        <defs>
                            <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />    
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>                
                </div>
            </div>
        )
    }
}
export default Sounds