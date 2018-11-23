import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import PlayIcon from '../img/play_icon.png';
import Category from './category';
import { zoomIn } from 'react-animations';

const fadeInLeftAnimation = keyframes`${zoomIn}`;

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

let animationValue = '';

class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            button1: 'Dziecko',
            button2: 'Dorosły',
            button3: 'Deszcz',
            isClicked: false,
            category: '',
            animation: false
        }
    }

        clickBtn = (val)=>{
            this.setState({
                isClicked: true,
                animation: !this.state.animation
            })
            animationValue = val
            if(!this.state.animation){
                animationValue = '';
            }
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
                        button3: 'Classic',
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
    
    render(){
        const {isClicked, button1, button2, button3, category, animation} = this.state;
        return(
        <div className='main-content'>
            <Category  ctgValue={this.setValue}></Category>
            <Content displayValue={category?'flex':'none'}>
                {console.log(this.state.category)}
              <ul className='music-btn-list'>
                    <li><button onClick={() => this.clickBtn('baby')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'baby'?btnStyle.animation:null} className={animationValue === 'baby'?' checked-btn-button round baby':'round baby'}>{button1}<div style={animationValue === 'baby'?visibleImg:null} className='round'><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('adult')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'adult'?btnStyle.animation:null} className={animationValue === 'adult'?' checked-btn-button round adult':'round adult'}>{button2}<div style={animationValue === 'adult'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('rain')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'rain'?btnStyle.animation:null} className={animationValue === 'rain'?' checked-btn-button round rain':'round rain'}>{button3}<div style={animationValue === 'rain'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                 </ul> 
            </Content>
            </div>
        )
    }
}
export default Header;