import React, { Component } from 'react';
import SoundsTemplate from '../../components/soundsTemplate';
import bee from '../../img/sounds_ico/animals/bee.png';
import dog from '../../img/sounds_ico/animals/dog.png';
import dolphin from '../../img/sounds_ico/animals/dolphin.png';
import farmAnimals from '../../img/sounds_ico/animals/farm_animal.png';
import sheep from '../../img/sounds_ico/animals/sheep.png';
import wolf from '../../img/sounds_ico/animals/wolf.png';
import Content from './CategoryContentStyle';

class Animals extends Component {
    state = {
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(2px)',
            clickedIco: '',
            clicked: false,
        }

    resaveViews = () => {
        this.setState({
            clickedBtn: '',
        })
    }

    clickIco = (val) => {
        // Set blur ico
        const { clickedBtn, clicked } = this.state;

        if (val === clickedBtn && !clicked) {
            this.setState({
                clickedIco: val,
                clicked: true,
            })
        } else {
            this.setState({
                clickedIco: '',
                clicked: false,
            })
        }

        //get a value from clicked button
        this.setState({
            clickedBtn: val
        }, () => {
            this.props.setSounds(val, clickedBtn, clicked)
        })
    }

    content = () => {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        if(this.props.selectedCtg === 'animals'){
            return(
                <Content display={this.props.selectedCtg === 'animals' ? 'flex' : 'none'}>
                <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'bee' || clickedIco === 'bee' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'bee' || clickedIco === 'bee' ? 'off' : 'on'} 
                     tittle='Pszczoła' 
                     blur={clickedBtn !== 'bee' || clickedIco === 'bee' ? blurOff : blurOn} 
                     icoValue='bee' 
                     clickIco={this.clickIco} 
                     ico={bee}>
                 </SoundsTemplate>
 
                 <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'dog' || clickedIco === 'dog' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'dog' || clickedIco === 'dog' ? 'off' : 'on'} 
                     tittle='Pies' 
                     blur={clickedBtn !== 'dog' || clickedIco === 'dog' ? blurOff : blurOn} 
                     icoValue='dog' 
                     clickIco={this.clickIco} 
                     ico={dog}>
                 </SoundsTemplate>
 
                 <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'dolphin' || clickedIco === 'dolphin' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'dolphin' || clickedIco === 'dolphin' ? 'off' : 'on'} 
                     tittle='Delfin' 
                     blur={clickedBtn !== 'dolphin' || clickedIco === 'dolphin' ? blurOff : blurOn} 
                     icoValue='dolphin' 
                     clickIco={this.clickIco} 
                     ico={dolphin}>
                 </SoundsTemplate>
 
                 <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'farm_animal' || clickedIco === 'farm_animal' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'farm_animal' || clickedIco === 'farm_animal' ? 'off' : 'on'} 
                     tittle='Wiejska farma' 
                     blur={clickedBtn !== 'farm_animal' || clickedIco === 'farm_animal' ? blurOff : blurOn} 
                     icoValue='farm_animal' 
                     clickIco={this.clickIco} 
                     ico={farmAnimals}>
                 </SoundsTemplate>
 
                 <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'sheep' || clickedIco === 'sheep' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'sheep' || clickedIco === 'sheep' ? 'off' : 'on'} 
                     tittle='Owca' 
                     blur={clickedBtn !== 'sheep' || clickedIco === 'sheep' ? blurOff : blurOn} 
                     icoValue='sheep' 
                     clickIco={this.clickIco} 
                     ico={sheep}>
                 </SoundsTemplate>
 
                 <SoundsTemplate 
                     isAuth={this.props.isAuth} 
                     displayRate={clickedBtn !== 'wolves' || clickedIco === 'wolves' ? 'none' : 'inline'} 
                     playIco={clickedBtn !== 'wolves' || clickedIco === 'wolves' ? 'off' : 'on'} 
                     tittle='Wilk' 
                     blur={clickedBtn !== 'wolves' || clickedIco === 'wolves' ? blurOff : blurOn} 
                     icoValue='wolves' 
                     clickIco={this.clickIco} 
                     ico={wolf}>
                 </SoundsTemplate>
             </Content>
            )
        }
    }

    render() {
        return (
           <div>
               {this.content()}
           </div>
        )
    }
}
export default Animals;