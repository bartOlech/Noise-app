import React, {Component} from 'react';
import '../App.css';
import Sound from 'react-sound';
import piano from '../sounds/piano.mp3';
import violin from '../sounds/violin.mp3';
import guitar from '../sounds/guitar.mp3';

const hideCnt = {
    display: 'none'
}

const fade = {
    opacity: '0.1'
}

const clickedBtnCircle = {
    strokeDashoffset: 0,
    opacity: 1
}
const clickedBtnTriangle = {
    strokeDashoffset: 0,
    opacity: 1,
    stroke: 'rgb(189, 178, 29)'
}

class Sounds extends Component{
    constructor(props){
        super(props)
        this.state = {
            cntIsVisible: false,
            menuBtnIsCheck: false,
            clickedNumberOfButton: null,
            sounds: [],
            curSoundBtnClicked: 0
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

    playBtn = (val)=>{
        const{clickedNumberOfButton} = this.state;
       
        return(
            <div className="sounds-playIcoBtn">
                <div className='internal-sounds-playIcoBtn'>
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
                        style={clickedNumberOfButton === val?clickedBtnTriangle:null}
                    />
                    <circle
                        className="circle"
                        id="XMLID_17_"
                        fill="none"
                        strokeWidth={8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="108.8"
                        cy="106.8"
                        r="100.3"
                        style={clickedNumberOfButton === val?clickedBtnCircle:null}
                    />
                    </svg>
                </div>
            </div>
        )
    }

    clickSoundBtn = (event)=>{
        const{clickedNumberOfButton} = this.state;
        this.setState({
            curSoundBtnClicked: event.currentTarget.value
        })
        if(clickedNumberOfButton === event.currentTarget.value){
            this.setState({
                clickedNumberOfButton: null
            })
        }else{
            this.setState({
                clickedNumberOfButton: event.currentTarget.value
            })
        }
        
    }

    playSound(){
        const{sounds, curSoundBtnClicked, clickedNumberOfButton} = this.state;
        let currentSound = piano;
        
        sounds.splice(0)
        sounds.push(piano, violin, guitar, piano);
        currentSound = sounds[curSoundBtnClicked]
        return (
            <Sound
              url={currentSound}
              playStatus={clickedNumberOfButton !== curSoundBtnClicked?Sound.status.STOPPED:Sound.status.PLAYING}
              loop={true}
              //volume={volumeVal}
              // DODAĆ FUNKCJE WYCISZAJĄCĄ (VOLUME)
            />
          );
    }

    render(){
        const{cntIsVisible, menuBtnIsCheck} = this.state;
        return(
            <div style={cntIsVisible?null:hideCnt}>

            {this.playSound()}

                <div style={menuBtnIsCheck?fade:null}>
                <div className="wrapperSounds">
                      <button value='0' onClick={this.clickSoundBtn} className='all-sounds-btn'>
                        {this.playBtn('0')}
                      Example
                      </button>

                      <button value='1' onClick={this.clickSoundBtn}  className='all-sounds-btn'>
                        {this.playBtn('1')}
                      Example
                      </button>

                      <button value='2' onClick={this.clickSoundBtn}  className='all-sounds-btn'>
                        {this.playBtn('2')}
                      Example
                      </button>

                      <button value='3' onClick={this.clickSoundBtn}  className='all-sounds-btn'>
                        {this.playBtn('3')}
                      Example
                      </button>
                </div>
                </div>
            </div>
        )
    }
}
export default Sounds