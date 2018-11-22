import React, {Component} from 'react';
import '../App.css';

const hideCtn = {
    display:'none'
}
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
        return(
            <div style={this.state.visibleContent?null:hideCtn} className='category-content'>
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
        )
    }
}
export default Category;