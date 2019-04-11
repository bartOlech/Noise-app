import React, {Component} from 'react';
import styled from 'styled-components';
import FavouritesBtn from './FavouritesBtn';
import Favourites from './favourites';

const Content = styled.div`

    `

class FavouritesContainer extends Component {
    state = {
        favouritesSectionIsVisible: false,
        favouriteSounds: [],
        loadedFavouritesEl: false,
    }

    // favourites ico button function
    favouritesIcoBtn = () => {
        this.props.setBackground('favourites');
        
        this.setState({
            loadedFavouritesEl: false,
            favouritesSectionIsVisible: true
        })
        fetch('/api/getFavouritesSounds')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    favouriteSounds: json.favouriteSounds,
                    loadedFavouritesEl: true
                })
            })       
    }

    // hide settings component
    hideContent = () => {
        console.log(this.props.clickedCategory)
        this.setState({
            favouritesSectionIsVisible: false,
        })
        this.props.setBackground('menu');
        this.props.resaveView();
    }

    // Play a sound from the favourite component
    playSoundFromFavourite = (index, el) => {
        const favouriteSounds = this.state.favouriteSounds[index]
        this.props.playSoundFromFavourite(favouriteSounds, el)
    }

    // remove a favourite element
    removeFavEl = (index, el) => {
        // this.props.removeFavEl(index, el)
        this.state.favouriteSounds.splice(index, 1)
        this.setState({
        sampleText: 'b',
        // playSound: false
    })
    }

    // show the favourites sounds (menu button)
    showFavouritesSounds(){
        this.setState({
            favouritesSectionIsVisible: true,
        })
        // get the favourites sound from database
        this.favouritesIcoBtn()
    }

    render() {
        const { 
            favouritesSectionIsVisible,
            favouriteSounds,
            loadedFavouritesEl,
         } = this.state;
        return(
            <Content>
                {/* favourites ico button */}
                <FavouritesBtn 
                    favouritesIcoBtn={this.favouritesIcoBtn}
                ></FavouritesBtn>

                {/* favourites main content */}
                <Favourites 
                    favouritesSectionIsVisible={favouritesSectionIsVisible}
                    playSoundFromFavourite={this.playSoundFromFavourite}
                    isAuth={this.props.isAuth}
                    hideContent={this.hideContent}
                    favouriteSounds={favouriteSounds}
                    loadedFavouritesEl={loadedFavouritesEl}
                    removeFavEl={this.removeFavEl}
                ></Favourites>
            </Content>
        )
    }
}
export default FavouritesContainer;