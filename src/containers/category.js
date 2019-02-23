import React, {Component} from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, fadeOut } from 'react-animations';

const bounceAnimation = keyframes`${bounceInLeft}`;
let fadeOutAnimation = keyframes`${fadeOut}`;
 
const BouncyDiv = styled.div`
  animation: 700ms forwards ${props =>props.animationVal};
  position: ${props=>props.displayValue};
`;
const hideCnt = {
    marginLeft: '-3000px'
}


class Category extends Component{
    constructor(props){
        super(props)
        this.state = {
            visibleContent: true,
            isClickedBtn: false
        }
    }
    chooseCategory = (event)=>{
        this.setState({
            visibleContent: false,
            isClickedBtn: true
        })
    }

    // Category buttons
    natureBtn = (event)=>{
        this.setState({
            visibleContent: false,
            isClickedBtn: true,
        })
        this.props.selectCtg(event.currentTarget.value)
    }


    resaveViews = ()=>{
        this.setState({
            visibleContent: true,
            isClickedBtn: false
        })

    }

    render(){
        const {visibleContent, isClickedBtn} = this.state;
        return(
            <BouncyDiv style={isClickedBtn?hideCnt:null} animationVal={visibleContent?bounceAnimation:fadeOutAnimation} displayValue={isClickedBtn?'absolute':'relative'} >
                <div className='category-content'>
                    <h3>Wybierz miejsce:</h3>
                    <div className='content-buttons'>
                        <button value='nature' className='ctg-btn' onClick={this.natureBtn}><span className='ctg-text'>Natura</span>
                        </button>
                        <button value='entertainment' className='ctg-btn' onClick={this.natureBtn}><span className='ctg-text'>Rozrywka</span>
                        </button>
                        <button value='???' className='ctg-btn' onClick={this.natureBtn}><span className='ctg-text'>'???'</span>
                        </button>
                        <button value='???' className='ctg-btn' onClick={this.natureBtn}><span className='ctg-text'>???</span>
                        </button>
                        
                    </div>
                </div>
            </BouncyDiv>
        )
    }
}
export default Category;