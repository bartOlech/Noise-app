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

class Header extends Component{
    constructor(props){
        super(props)
        this.state= {
            button1: 'Dziecko',
            button2: 'Dorosły',
            button3: 'Deszcz',
            isClicked: false,
            category: '',
            animationValue: '',
        }
    }

        clickBtn = (val)=>{
            this.setState({
                isClicked: true,
                animationValue: val,
            })
            if(val === this.state.animationValue){
                this.setState({
                    animationValue: ''
                })
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
        const {isClicked, button1, button2, button3, category, animationValue} = this.state;
        return(
        <div className='main-content'>
            <Category  ctgValue={this.setValue}></Category>
            <Content displayValue={category?'flex':'none'}>
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