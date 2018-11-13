import React, {Component} from 'react';
import styled from 'styled-components';
import mainLogo from '../img/logo.png';
import '../App.css';

const Content = styled.div`
        width: 100vw;
        height: 180px;
        background-color: #166678;

        @media (min-width:600px){
            display:flex;
            flex-direction:row;
        } 
    `;
const Img = styled.img`
    margin-left:40px;

    @media (max-width:600px){
        margin-left: 110px;
    }
    @media (min-width:1000px){
        margin-left: 130px;
    }
`
const horizontalLine = {
    display: 'none'
}
const horizontalLineVisible = {
    display: 'block'
}

const one = 'one';
const two = 'two';
const three = 'three';

class Header extends Component{
    state = {
        horizontalLine:''
    }

    textOver=(el)=>{
        this.setState({
            horizontalLine: el
        })
    }
    textOut=(el)=>{
        this.setState({
            horizontalLine: ''
        })
    }
    
    render(){
        return(
            <Content>
                <Img src={mainLogo} alt='logo'></Img>
                <nav className='nav-phone'>
                    <div className="menu-toggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu">
                            <li className=""><div>Jak zasnąć</div></li>
                            <li className=""><div>Sklep</div></li>
                            <li className=""><div>Odgłosy</div></li>
                            <div className='menu-line'></div>
                        </ul>
                    </div>
                </nav>
                <nav class='nav-desktop'>
                    <ul>
                        <li><div onMouseOut={()=>this.textOut(one)} onMouseOver={()=>this.textOver(one)}>Jak zasnąć<div style={this.state.horizontalLine==='one'?horizontalLineVisible:horizontalLine} className='horizontal-line'></div></div></li>
                        <li><div onMouseOut={()=>this.textOut(two)} onMouseOver={()=>this.textOver(two)}>Sklep<div style={this.state.horizontalLine==='two'?horizontalLineVisible:horizontalLine}  className='horizontal-line'></div></div></li>
                        <li><div onMouseOut={()=>this.textOut(three)} onMouseOver={()=>this.textOver(three)}>Odgłosy<div style={this.state.horizontalLine==='three'?horizontalLineVisible:horizontalLine} className='horizontal-line'></div></div></li>
                    </ul>
                </nav>
            </Content>
        )
    }
}
export default Header;