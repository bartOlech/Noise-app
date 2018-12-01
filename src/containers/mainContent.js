import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import AudioSpectrum from 'react-audio-spectrum';
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

const fadeInLeftAnimation = keyframes`${zoomIn}`;

const visualizerStyle = {
    marginLeft: '300px'
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
class Header extends Component{
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
            curSoundBtnClicked: ''
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
            }, 200)
        }   

        resaveView() {
            this.setState({
                category: '',
                animationValue: '',
                btn1: false,
                btn2: false,
                btn3: false
            })
            this.child.current.resaveViews();
          }

          playSound(){

            const {currentSelectedCtg, btn1, btn2, btn3, category,} = this.state;
            let currentSound = null;
            let curSoundBtnClicked = null;
            
            if(category === 'learn'){
                if(btn1){currentSound = piano; curSoundBtnClicked = 'btn1'}else
                if(btn2){currentSound = violin; curSoundBtnClicked = 'btn2'}else
                if(btn3){currentSound = guitar; curSoundBtnClicked = 'btn3'}
            }else if(category === 'relax'){
                if(btn1){currentSound = fire; curSoundBtnClicked = 'btn1'}else
                if(btn2){currentSound = forrest; curSoundBtnClicked = 'btn2'}else
                if(btn3){currentSound = rain; curSoundBtnClicked = 'btn3'}
            }else if(category === 'sleep'){
                if(btn1){currentSound = noise; curSoundBtnClicked = 'btn1'}else
                if(btn2){currentSound = wind; curSoundBtnClicked = 'btn2'}else
                if(btn3){currentSound = waves; curSoundBtnClicked = 'btn3'}
            }
              return(
                <audio id='audio-element' src={currentSound} muted={curSoundBtnClicked !== currentSelectedCtg?true:false} loop autoPlay/>
              )
          }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
    }
    resize() {
        if(window.innerWidth > 600){
            console.log('wide')
            return(
                <AudioSpectrum
                style={visualizerStyle}
                id="audio-canvas"
                height={200}
                width={300}
                audioId={'audio-element'}
                capColor={'LightCoral '}
                capHeight={2}
                meterWidth={2}
                meterCount={512}
                meterColor={[
                    {stop: 0, color: '#f00'},
                    {stop: 0.5, color: '#0CD7FD'},
                    {stop: 1, color: 'red'}
                ]}
                gap={4}
            />
            )
         }
    }

    render(){
        const {isClicked, button1, button2, button3, category, animationValue} = this.state;
        return(
        <div className='main-content'>
         {/* Visualizer */}
         {this.resize()}


            <Category  ref={this.child} ctgValue={this.setValue}></Category>
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
export default Header;