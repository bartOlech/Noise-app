import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import PlayIcon from '../img/play_icon.png';
import Category from './category';
import { zoomIn } from 'react-animations';
import piano from '../sounds/piano.mp3';
import violin from '../sounds/violin.mp3';
import guitar from '../sounds/guitar.mp3';
import rain from '../sounds/rain.mp3';
import fire from '../sounds/fire.mp3';
import noise from '../sounds/noise.mp3';
import forrest from '../sounds/forrest.mp3';
import waves from '../sounds/waves.mp3';
import wind from '../sounds/wind.mp3';
import Sound from 'react-sound';

const fadeInLeftAnimation = keyframes`${zoomIn}`;

const hideStyle = {
    display: 'none',
    opacity: 0
}

const hideElInLeft = {
    marginLeft: '-1000px'
}

const Content = styled.div`
       display: ${props=>props.displayValue};
       animation: 700ms forwards ${fadeInLeftAnimation};
    `;
const btnStyle = {
    animation: {animation: 'clicked 150ms'},
    checked: {background: 'black'}
};
const visibleImg = {
    opacity: '.85',
    fontSize: '16px',
    width: '109%',
    height: '109%',
    transitionProperty: 'none',
    left: '-4px',
    top: '-4px'
};
class MainContent extends Component{
    constructor(props){
        super(props)
        this.state= {
            button1: '',
            button2: '',
            button3: '',
            isClicked: false,
            category: '',
            animationValue: '',
            currentSelectedCtg: '',
            btn1: false,
            btn2: false,
            btn3: false,
            curSoundBtnClicked: '',
            cntIsVisible: true,
            menuIsClicked: !false,
            soundsArray: []
        }
        this.child = React.createRef();
    }

        clickBtn = (val)=>{

            this.setState({
                isClicked: true,
                animationValue: val,
                currentSelectedCtg: val
            })
            if(val === this.state.animationValue){
                this.setState({
                    animationValue: '',
                    currentSelectedCtg: ''
                })
            }  
            val === 'btn1'?this.setState({btn1: true}):this.setState({btn1: false});
            val === 'btn2'?this.setState({btn2: true}):this.setState({btn2: false});
            val === 'btn3'?this.setState({btn3: true}):this.setState({btn3: false});

        }
        setValue = (val)=>{
            setTimeout(()=>{
                this.setState({
                    category:val
                })
                if(this.state.category === 'learn'){
                    this.setState({
                        button1: 'Fortepian',
                        button2: 'Skrzypce',
                        button3: 'Gitara',
                    })
                }else if(this.state.category === 'relax'){
                    this.setState({
                        button1: 'Ogień',
                        button2: 'Las',
                        button3: 'Deszcz',
                    })
                }else if(this.state.category === 'sleep'){
                    this.setState({
                        button1: 'Szum',
                        button2: 'Wiatr',
                        button3: 'Fale',
                    })
                }
            }, 1)
        }   

        resaveView() {
            this.setState({
                category: '',
                animationValue: '',
                btn1: false,
                btn2: false,
                btn3: false,
                cntIsVisible: true,
                menuIsClicked: true
            })
            this.child.current.resaveViews();
          }

          playSound(){

            const {currentSelectedCtg, soundsArray, category, btn1, btn2, btn3} = this.state;
            let internalArr = [];
            let currentSound = piano;
            let curSoundBtnClicked = null;
            soundsArray.splice(0)
            
            if(category === 'learn'){
                internalArr.length = 0;
                soundsArray.push(piano, violin, guitar);
                internalArr = soundsArray.slice(0, 3);
                if(btn1){
                    currentSound = internalArr[0];
                    curSoundBtnClicked = 'btn1';
                }
                if(btn2){
                    currentSound = internalArr[1];
                    curSoundBtnClicked = 'btn2';
                }
                if(btn3){
                    currentSound = internalArr[2];
                    curSoundBtnClicked = 'btn3';
                }
            }
            if(category === 'relax'){  
                internalArr.length = 0;
                soundsArray.push(fire, forrest, rain);
                internalArr = soundsArray.slice(0, 3);
                if(btn1){
                    currentSound = internalArr[0];
                    curSoundBtnClicked = 'btn1';
                }
                if(btn2){
                    currentSound = internalArr[1];
                    curSoundBtnClicked = 'btn2';
                }
                if(btn3){
                    currentSound = internalArr[2];
                    curSoundBtnClicked = 'btn3';
                }
            }
            if(category === 'sleep'){
                internalArr.length = 0;
                soundsArray.push(noise, wind, waves);
                internalArr = soundsArray.slice(0, 3);
                if(btn1){
                    currentSound = internalArr[0];
                    curSoundBtnClicked = 'btn1';
                }
                if(btn2){
                    currentSound = internalArr[1];
                    curSoundBtnClicked = 'btn2';
                }
                if(btn3){
                    currentSound = internalArr[2];
                    curSoundBtnClicked = 'btn3';
                }
            }
            return (
                <Sound
                  url={currentSound}
                  playStatus={curSoundBtnClicked !== currentSelectedCtg?Sound.status.STOPPED:Sound.status.PLAYING}
                  loop={true}
                />
              );
          }



    hideCnt() {
        this.setState({
            cntIsVisible: false
        })
    }

    clickMenu(){
            this.setState({
                menuIsClicked: !this.state.menuIsClicked
            })  
    }

    render(){
        const {isClicked, button1, button2, button3, category, animationValue, cntIsVisible, menuIsClicked} = this.state;
        return(
        <div style={cntIsVisible?null:hideStyle} className='main-content'>


            <div style={menuIsClicked?null:hideElInLeft}><Category  ref={this.child} ctgValue={this.setValue}></Category></div>
            
            <Content displayValue={category?'flex':'none'}>

           {/* audio */}
                {this.playSound()}
            
              <ul className='music-btn-list'>
                    <li><button onClick={() => this.clickBtn('btn1')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'btn1'?btnStyle.animation:null} className={animationValue === 'btn1'?' checked-btn-button round btn1':'round btn1'}>{button1}<div style={animationValue === 'btn1'?visibleImg:null} className='round'><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('btn2')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'btn2'?btnStyle.animation:null} className={animationValue === 'btn2'?' checked-btn-button round btn2':'round btn2'}>{button2}<div style={animationValue === 'btn2'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('btn3')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'btn3'?btnStyle.animation:null} className={animationValue === 'btn3'?' checked-btn-button round btn3':'round btn3'}>{button3}<div style={animationValue === 'btn3'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                 </ul> 
            </Content>
            </div>
        )
    }
}
export default MainContent;