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
        this.props.ctgValue(event.currentTarget.value);
        this.setState({
            visibleContent: false,
            isClickedBtn: true
        })
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
                    <h3>Wybierz kategorię:</h3>
                    <div className='content-buttons'>
                        <button value='learn' className='ctg-btn ctg-btn-1' onClick={this.chooseCategory}><span className='ctg-text'>Nauka</span>
                        </button>
                        <button value='relax' className='ctg-btn ctg-btn-2' onClick={this.chooseCategory}><span className='ctg-text'>Relaks</span>
                        </button>
                        <button value='sleep' className='ctg-btn ctg-btn-3' onClick={this.chooseCategory}><span className='ctg-text'>Sen</span>
                        </button>
                    </div>
                </div>
            </BouncyDiv>
        )
    }
}
export default Category;