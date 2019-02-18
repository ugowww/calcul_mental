import React, { Component } from 'react';
import NavigationStyle from './Navigation.style';
import {connect} from 'react-redux';
import {nextQuestion,prevQuestion,ValideQuestion} from '../../actions';
import {Button} from 'antd';

class index extends Component {
    
     _onNext(e) {
        this.props.nextQuestion()
    }
     _onPrev(e) {
        this.props.prevQuestion()
     }

    _onOver(e) {
      e.currentTarget.classList.add('over')  
     
    }
    _onOut(e) {
        e.currentTarget.classList.remove('over')   
      }

    _onClick (e){
     this.props.valideQuestion()
    }
    render() {
     
        console.log(this.props.validate, this.props.select)

        return (
            <NavigationStyle>
           { this.props.level===4 ? null :
            !this.props.mode ? 
           <div className="module-maths-next">
           <Button  type="primary"onClick={(e)=> this._onNext(e)} disabled={this.props.try<2 || !this.props.select} shape="circle" icon="right" />
           </div> :
           <div className="module-maths-next">
           <Button type="primary" onClick={(e)=> this._onNext(e)}  shape="circle" icon="right" />
           </div>
           } 
           
          {(this.props.try===2 && this.props.level===4) || this.props.mode ? <div className="module-maths-validate"></div> :
           <div className="module-maths-validate">
           <Button className="btnvalider" type="primary"  size={"small"} onClick={(e) => this._onClick(e)} disabled={this.props.try===2|| !this.props.select }>VALIDER</Button>
           </div>
            }

            { (this.props.try===2 && this.props.level===4) || (this.props.mode && this.props.level>0)  ?  
            <div className="module-maths-prev">
            <Button type="primary" onClick={(e)=> this._onPrev()}  shape="circle" icon="left" /> 
           </div> : null
          }
           </NavigationStyle>
        );
    }
}

const mapStateToProps = state => {

return {
    try:  state.appReducer.TRY,
    select  : state.appReducer.SELECT,
    validate  : state.appReducer.VALIDATE,
    level : state.appReducer.LEVEL,
    mode : state.appReducer.MODE
  
}}

const mapDispatchToProps = dispatch => {
    return {
      nextQuestion: () => { 
        dispatch(nextQuestion());
      },
      prevQuestion: () => { 
        dispatch(prevQuestion());
      },
      valideQuestion :() => {
        dispatch(ValideQuestion());
      }
    };
  };

export default connect(
 
  mapStateToProps,
    mapDispatchToProps
  )(index)

