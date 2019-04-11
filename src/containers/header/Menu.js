import React, { Component } from 'react';
import '../../App.css';

class Menu extends Component {
    state = {
        isChecked: false
    }

    menuHandle = () => {

    }
    
    clickHamMenu = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.clickHamburgerMenu()
    }

    // user section menu
    menuUserBtn = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.menuUserBtn()
    }

    // favourites section menu
    favouritesSection = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.favouritesSection()
    }

    // mobile version section menu
    menuMobileVersion = () => {
        // this.props.menuMobileVersion()
    }

    // settings section menu
    menuSettingsBtn = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.menuSettingsBtn()
    }


    render() {
        return (
            <div>
             <nav className='nav-phone'>
                    <div className="menu-toggle">
                        <input checked={this.state.isChecked} onClick={this.clickHamMenu} type="checkbox" onChange={this.menuHandle} />
                        <span className='span-1'></span>
                        <span className='span-2'></span>
                        <span className='span-3'></span>
                        <ul className="menu">
                            <li className="menu-menu"><div className='menu-ico'></div><div>Menu</div></li>
                            <li onClick={this.menuUserBtn} className="menu-profile"><div className='profile-ico menu-ico'></div><div>Profil</div></li>
                            <li className="menu-best-rated"><div className='rated-ico menu-ico'></div><div onClick={this.favouritesSection}>Najlepiej oceniane</div></li>
                            <li className="menu-mobile-v"><div className='mobile-ico menu-ico'></div><div onClick={this.menuMobileVersion} style={{color: 'grey'}}>Wersja mobilna</div></li>
                            <li onClick={this.menuSettingsBtn} className="menu-settings"><div className='settings-ico menu-ico'></div><div >Ustawienia</div></li>
                        </ul>
                    </div>
                </nav> 
            </div>
        )
    }
}

export default Menu;