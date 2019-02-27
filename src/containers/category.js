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
    categoryBtn = (event)=>{
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
                        <button value='nature' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Natura</span>
                        </button>
                        <button value='chill' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Chill</span>
                        </button>
                        <button value='jobs' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Praca</span>
                        </button>
                        <button value='animals' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Zwierzęta</span>
                        </button>
                        <button value='culture' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>M. kultury</span>
                        </button>
                        <button value='historyPlaces' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>M. historii</span>
                        </button>
                        <button value='other' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Inne</span>
                        </button>
                        
                    </div>
                </div>
            </BouncyDiv>
        )
    }
}
export default Category;