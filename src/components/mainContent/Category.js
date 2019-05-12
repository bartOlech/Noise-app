import React, {Component} from 'react';
import '../../App.css';
import styled from 'styled-components';
 
const Content = styled.div`
  display: flex;
`;

class Category extends Component{
    state = {
            visibleContent: true,
            isClickedBtn: false
    }
    // Category buttons
    categoryBtn = (event)=>{
        this.setState({
            visibleContent: false,
            isClickedBtn: true,
        })
        this.props.selectCtg(event.currentTarget.value, event.currentTarget.name)
    }
    render(){
        return(
            <Content>
                <div className='category-content'>
                    <h3>Wybierz kategorię:</h3>
                    <div className='content-buttons'>
                        <button name='Natura' value='nature' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Natura</span>
                        </button>
                        <button name='Chill' value='chill' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Chill</span>
                        </button>
                        <button name='Zwierzęta' value='animals' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Zwierzęta</span>
                        </button>
                        <button name='Miejsca' value='places' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Miejsca</span>
                        </button>   
                        <button name='Inne' value='other' className='ctg-btn' onClick={this.categoryBtn}><span className='ctg-text'>Inne</span>
                        </button>                       
                    </div>
                </div>
            </Content>
        )
    }
}
export default Category;