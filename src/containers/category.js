import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';

class Category extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className='category-content'>
                <h3>Wybierz kategorię:</h3>
                <div className='content-buttons'>
                    <button className='ctg-btn ctg-btn-1'><span className='ctg-text'>Nauka</span>
                    </button>
                    <button className='ctg-btn ctg-btn-2'><span className='ctg-text'>Relaks</span>
                    </button>
                    <button className='ctg-btn ctg-btn-3'><span className='ctg-text'>Sen</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default Category;