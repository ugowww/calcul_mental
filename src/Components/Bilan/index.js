import React, { Component } from 'react';
import BilanStyle from './Bilan.style';
import {connect} from 'react-redux';
import {isMobileOnly} from "react-device-detect";

import flag from './flag.svg';
class index extends Component {


    state = {
        score : 0
    }

    componentWillReceiveProps () {
         this.getScore()
    }
       
    getScore () {
    let score = 0;
    this.props.BILAN.map(i => {
           return score +=i
           
        })
   
    this.setState({score})
   
    }

    render() {
        const {imgWidth} = isMobileOnly ? {imgWidth :'50px'} :{imgWidth:'70px'}
        return (
            <BilanStyle imgWidth={imgWidth}>
                <div id="container-bilan">
                <img alt="" src={flag} />
                {this.state.score ===0 ?
                    
                    <div className="message-bilan">Bilan<br></br> Vous n'avez réussi aucune question</div>
                    :  this.state.score ===1 ? <div className="message-bilan">Bilan<br></br>Vous avez réussi 1 question sur <span>{this.props.MODE ? 5 : Number(this.props.LEVEL)+1}</span></div> :
                    <div className="message-bilan">Bilan<br></br> Vous avez réussi <span>{this.state.score}</span> questions sur <span>{this.props.MODE ? 5 : Number(this.props.LEVEL)+1}</span></div>
                    }
                </div>
                
            </BilanStyle>
        );
    }
}

const mapStateToProps = state => {

    return {
     USER_CHOICES : state.appReducer.USER_CHOICES,
     LEVEL : state.appReducer.LEVEL,
     TRY : state.appReducer.TRY,
     BILAN : state.appReducer.BILAN,
     MODE : state.appReducer.MODE,
     
    }
 }
 
 export default connect(
   mapStateToProps
 )(index)