import React, { Component } from 'react';
import QuizStyle from './Quiz.style';
import MathJax  from 'react-mathjax';
import {connect} from 'react-redux';
import {Modal} from 'antd';
import {addUserChoice} from '../actions';
import Item from '../Components/item';
import Level from '../Components/Level/index';
import Progression from '../Components/Progression/index';
import Navigation from '../Components/Navigation/Navigation';
import Bilan from '../Components/Bilan/index'
import {App} from '../constants'
import { isMobileOnly } from 'react-device-detect';


class index extends Component {


  constructor(props){
    super(props);
    this.ironImageHd = null;
    this.state ={
      selectedOption : -1,
      visible: false
    }
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }

  getText(){
    if(this.props.TRY===1) {
      return "Réessayez"
    } else {
      return "Mauvaise réponse"
    }
  }

  
  renderItem =(level) =>{
   const _map = this.props.exercice!==undefined ? 
    this.props.exercice[level].propositions.map((data,index) => {
     return  this.renderFormula(data,1,index, this.props.exercice[level].solution)
    }) :  null
    return _map
   }

  renderFormula =(data,type,id,solution) =>{
    
  let class_1= (Number(id) === Number(this.props.USER_CHOICES[Number(this.props.LEVEL)])) ? "validate" : "";
  return  !this.props.MODE ? 
  // EXO EN COURS 
  this.props.VALIDATE ? 
  // ESSAI 1 OU 2 À LA VALIDATION
  this.props.TRY===1?
  (Number(solution)-1) === Number(id) ? 
     <Item key={id} addClass={"quiz-answer correct " +class_1} icon={"check"} message = {"Bonne réponse"} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
    :  <Item key={id} addClass={"quiz-answer " +class_1}  icon={"close"} message = {this.getText()} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  : 
  
  //
  (Number(solution)-1) === Number(id) ? 
  <Item key={id} addClass={"quiz-answer bilan correct " +class_1} icon={"check"} message = {"Bonne réponse"} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
 : (Number(this.props.USER_CHOICES[this.props.LEVEL])) === Number(id) ? 
  <Item key={id} addClass={"quiz-answer bilan nocorrect " +class_1} icon={"close"} message = {"Votre réponse"} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  :
  <Item key={id} addClass={"quiz-answer bilan " +class_1} icon={"close"} message = {this.getText()} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  //
  : 
  // AU LANCEMENT DE L'ACTIVITÉ
  (Number(solution)-1) === Number(id) ? 
    <Item key={id} addClass={'quiz-answer  correct'} icon={""} message = {""} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
   :  <Item key={id} addClass={'quiz-answer '} icon={""} message = {this.getText()} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  
 
  
  : 
  // BILAN
  
   (Number(solution)-1) === Number(id) ? 
  <Item key={id} addClass={"quiz-answer bilan correct " +class_1} icon={"check"} message = {"Bonne réponse"} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
 : (Number(this.props.USER_CHOICES[this.props.LEVEL])) === Number(id) ? 
  <Item key={id} addClass={"quiz-answer bilan nocorrect " +class_1} icon={"close"} message = {"Votre réponse"} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  :
  <Item key={id} addClass={"quiz-answer bilan " +class_1} icon={"close"} message = {this.getText()} onChange={(e)=>this._onChange(e)} disabled= {this.props.TRY===2} checked={this.state.selectedOption} type={type} formula={data} id={id}></Item>
  
   



}
  

  _onChange(e){
    


     if(this.props.TRY<2) {
      this.props.UserChoice(e.target.value)
      this.setState({
       selectedOption: e.target.value
     });
    } else {
      return false
    }
   
    
     
  }

  componentWillReceiveProps(){
   
    if(this.props.TRY===2) this.setState({selectedOption: -1});
    
}


  renderImage =() =>{
    if(this.props.exercice && this.props.exercice[this.props.LEVEL].image) {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = App.path+"/"+this.props.ID+"/"+this.props.exercice[this.props.LEVEL].image;
    hdLoaderImg.onload = () => {
      
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url(${ App.path+"/"+this.props.ID+"/"+this.props.exercice[this.props.LEVEL].image})`,
      );

      this.ironImageHd.classList.remove('no-image');
    }
    } else {
      if(this.ironImageHd){
      this.ironImageHd.setAttribute(
        'style',
       ' background-image: none',
      );
      this.ironImageHd.classList.add('no-image');
    }}

  }

  render() {
    const {paddingLeft} = (this.props.TRY===2 && this.props.LEVEL===4) || this.props.MODE ?    { paddingLeft: '0px'} : isMobileOnly ? { paddingLeft: '40px'}:{ paddingLeft: '50px'}
    const {windowHeight} = isMobileOnly ? {windowHeight:window.innerHeight-50} :{windowHeight:600}
    const {windowMinHeight} = isMobileOnly ? {windowMinHeight:window.innerHeight-100} :{windowMinHeight:600}
   
    const level = this.props.LEVEL
    const bilan = this.props.BILAN
    
    return (

    <QuizStyle paddingLeft={paddingLeft} windowMinHeight ={windowMinHeight} windowHeight={windowHeight}>
      <Modal
          title="Figure"
          visible={this.state.visible}
          footer={null}
          onCancel={this.hideModal}
        >
         <div><img alt="" src={App.path+"/"+this.props.ID+"/"+this.props.exercice[this.props.LEVEL].image}/></div>
        </Modal>
      <div className="module-maths-maths-box">
     
      <Level int={level}></Level>
      <Progression try={this.props.TRY}  bilan={bilan} level={level}></Progression>
      
      <div className="quiz">
      <span style={{'display' : (this.props.TRY===2 && this.props.LEVEL===4) || this.props.MODE ? 'block' : 'none'}} score = {this.props.BILAN}>
<Bilan></Bilan></span>
      <MathJax.Provider options= { 
        {
            showMathMenu: false,
            showMathMenuMSIE: false,
            messageStyle: "none",
            tex2jax: {
            preview: "none",
            inlineMath: [ ['$','$'], ["\\(","\\)"] ]
           
      }}
        }>
      
      <div  className="module-maths-maths-consigne">{ this.props.exercice && this.props.exercice[this.props.LEVEL].consigne? this.renderFormula(this.props.exercice[level].consigne,0,null,null): null}</div>
    
      {isMobileOnly  && this.props.exercice && this.props.exercice[this.props.LEVEL].image ? <div onClick={this.showModal} className="module-maths-maths-image no-image mobile" style={{backgroundImage: 'none'}} ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>{this.renderImage()}</div> : <div className="module-maths-maths-image no-image" style={{backgroundImage: 'none'}} ref={imageLoadedElem => this.ironImageHd = imageLoadedElem}>{this.renderImage()}</div>}
      {this.renderItem(level)}
        </MathJax.Provider>
        <div className="wrapper-button" style={{textAlign:'center',position: 'relative',
marginTop: '0px', height:'50px',color :'#4257b2'}}> 
           <Navigation props={this.props}></Navigation>
           </div>
      </div></div>
      </QuizStyle>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    UserChoice :(id) => {
      dispatch(addUserChoice(id));
    }
  };
};


const mapStateToProps = state => {

   return {
    VALIDATE : state.appReducer.VALIDATE,
    USER_CHOICES : state.appReducer.USER_CHOICES,
    LEVEL : state.appReducer.LEVEL,
    TRY : state.appReducer.TRY,
    BILAN : state.appReducer.BILAN,
    MODE : state.appReducer.MODE,
    ID : state.appReducer.ID
   }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)
