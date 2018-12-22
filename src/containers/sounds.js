import React, {Component} from 'react';
// import styled from 'styled-components';
import '../App.css';

const hideCnt = {
    display: 'none'
}

const fade = {
    opacity: '0.1'
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

    playBtn = ()=>{
        return(
            <div className="sounds-playIcoBtn">
                <div class='internal-sounds-playIcoBtn'>
                    <svg
                    x="0px"
                    y="0px"
                    width="43.7px"
                    height="43.7px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                    >
                    <polygon
                        className="triangle"
                        id="XMLID_18_"
                        fill="none"
                        strokeWidth={7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        points="
                    73.5,62.5 148.5,105.8 73.5,149.1 "
                    />
                    <circle
                        className="circle"
                        id="XMLID_17_"
                        fill="none"
                        strokeWidth={7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                    />
                    </svg>
                </div>
            </div>
        )
    }

    render(){
        const{cntIsVisible, menuBtnIsCheck} = this.state;
        return(
            <div style={cntIsVisible?null:hideCnt}>
                <div style={menuBtnIsCheck?fade:null}>
                <div className="wrapperSounds">
                      <button className='all-sounds-btn'>
                        {this.playBtn()}
                      Example
                      </button>

                      <button className='all-sounds-btn'>
                        {this.playBtn()}
                      Example
                      </button>

                      <button className='all-sounds-btn'>
                        {this.playBtn()}
                      Example
                      </button>

                      <button className='all-sounds-btn'>
                        {this.playBtn()}
                      Example
                      </button>
                </div>
                </div>
            </div>
        )
    }
}
export default Sounds