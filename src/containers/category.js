import React, {Component} from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, fadeOutRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceInLeft}`;
const fadeOutRightAnimation = keyframes`${fadeOutRight}`;
 
const BouncyDiv = styled.div`
  animation: 700ms forwards ${props =>props.animationVal};
`;
class Category extends Component{
    constructor(props){
        super(props)
        this.state = {
            visibleContent: true
        }
    }
    chooseCategory = (val)=>{
        this.props.ctgValue(val)
        this.setState({
            visibleContent: false
        })
    }

    render(){
        const {visibleContent} = this.state;
        return(
            <BouncyDiv animationVal={visibleContent?bounceAnimation:fadeOutRightAnimation}>
                <div className='category-content'>
                    <h3>Wybierz kategorię:</h3>
                    <div className='content-buttons'>
                        <button className='ctg-btn ctg-btn-1' onClick={()=>this.chooseCategory('learn')}><span className='ctg-text'>Nauka</span>
                        </button>
                        <button className='ctg-btn ctg-btn-2' onClick={()=>this.chooseCategory('relax')}><span className='ctg-text'>Relaks</span>
                        </button>
                        <button className='ctg-btn ctg-btn-3' onClick={()=>this.chooseCategory('sleep')}><span className='ctg-text'>Sen</span>
                        </button>
                    </div>
                </div>
            </BouncyDiv>
        )
    }
}
export default Category;