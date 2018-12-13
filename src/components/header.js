import React, {Component} from 'react';
import styled from 'styled-components';
import mainLogo from '../img/logoo.png';
import '../App.css';

const Content = styled.div`
        width: 100vw;
        height: 180px;
        background-image: linear-gradient(to right, #0a7f99 0%, #0a7f99 0%, #0a7f99 0%, #257e92 33%, #0697b8 66%, #0697b8 100%);
        box-shadow: 2px 2px 15px rgba(0,0,0,.2);
        @media (min-width:600px){
            display:flex;
            flex-direction:row;
        } 
    `;
const Img = styled.img`
    width: 200px;
    height: 200px;
    margin-left:4px;
    margin-top:-10px;
    cursor: pointer;

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
class Header extends Component{
    state = {
        horizontalLine:'',
        menuIsClicked: !false,
        isChecked: false
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
    clickHeaderLogo = ()=>{
      this.props.clickHeaderLogo()
    }

    babySleepBtn = ()=>{
        this.props.babySleepBtn()
        this.setState({
            isChecked: false
        })
    }

    clickHamMenu = ()=>{
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.clickHamburgerMenu()
    }
    

    onChange = ()=>{
        
    }
    
    render(){
        return(
            <Content>
                <Img onClick={this.clickHeaderLogo} src={mainLogo} alt='logo'></Img>
                <nav className='nav-phone'>
                    <div className="menu-toggle">
                        <input checked={this.state.isChecked} onClick={this.clickHamMenu} type="checkbox" onChange={this.onChange}/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu">
                            <li className=""><div onClick={this.babySleepBtn}>Uśpij dziecko</div></li>
                            <li className=""><div>Sklep</div></li>
                            <li className=""><div>Jak zasnąć</div></li>
                            <div className='menu-line'></div>
                        </ul>
                    </div>
                </nav>
                <nav className='nav-desktop'>
                    <ul>
                        <li><div onMouseOut={()=>this.textOut('one')} onMouseOver={()=>this.textOver('one')} onClick={this.babySleepBtn}>Uśpij dziecko<div style={this.state.horizontalLine==='one'?horizontalLineVisible:horizontalLine} className='horizontal-line'></div></div></li>
                        <li><div onMouseOut={()=>this.textOut('two')} onMouseOver={()=>this.textOver('two')}>Sklep<div style={this.state.horizontalLine==='two'?horizontalLineVisible:horizontalLine}  className='horizontal-line'></div></div></li>
                        <li><div onMouseOut={()=>this.textOut('three')} onMouseOver={()=>this.textOver('three')}>Jak zasnąć<div style={this.state.horizontalLine==='three'?horizontalLineVisible:horizontalLine} className='horizontal-line'></div></div></li>
                    </ul>
                </nav>
            </Content>
        )
    }
}
export default Header;