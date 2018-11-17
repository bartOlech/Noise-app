import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';
import PlayIcon from '../img/play_icon.png'

const Content = styled.div`
       
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
            babySoundBtn: 'Dziecko',
            adultSoundBtn: 'Dorosły',
            rainSoundBtn: 'Deszcz',
            isClicked: false,
        }
    }

        clickBtn = (val)=>{
            this.setState({
                isClicked: true
            })
            animationValue = val
        }
    
    render(){
        const {isClicked, babySoundBtn, adultSoundBtn, rainSoundBtn} = this.state;
        return(
            <Content>
              <ul className='music-btn-list'>
                    <li><button onClick={() => this.clickBtn('baby')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'baby'?btnStyle.animation:null} className={animationValue === 'baby'?' checked-btn-button round baby':'round baby'}>{babySoundBtn}<div style={animationValue === 'baby'?visibleImg:null} className='round'><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('adult')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'adult'?btnStyle.animation:null} className={animationValue === 'adult'?' checked-btn-button round adult':'round adult'}>{adultSoundBtn}<div style={animationValue === 'adult'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                    <li><button onClick={() => this.clickBtn('rain')} onAnimationEnd={() => this.setState({isClicked: false})} style={isClicked && animationValue === 'rain'?btnStyle.animation:null} class={animationValue === 'rain'?' checked-btn-button round rain':'round rain'}>{rainSoundBtn}<div style={animationValue === 'rain'?visibleImg:null} className="round"><img src={PlayIcon} alt='play ico'></img></div></button>
                    </li>
                 </ul> 
            </Content>
        )
    }
}
export default Header;