import React, { Component } from 'react'
import Header from './Header/index';
import Quiz from './Quiz/index';
import Hamburger from './Components/Hamburger/index';
import MenuApp from './MenuApp/index';
import Loader from './Components/Loader';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import House from './Components/Home/index'
import {MobileOnlyView,isBrowser,isTablet} from "react-device-detect";
import logo from './Assets/nathan155.jpg';
import hyperbole from './Assets/hyperbole_logo.jpg';

const {Sider,Content} = Layout;
const styles = {
    width: "300px",
    transform: "translate(-50%, -50%)",
    top:"50%",
    left: "50%",
    margin: "0",
    position: "absolute",
    background: "#3ccfcf",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: "40px",
    boxShadow: '0px 5px 8px rgba(0,10,20,0.06)',
    borderRadius : '10px',
    fontWeight : 'bold',
    textAlign : 'center',
    color : "#ffffff"
}

class QuizApp extends Component {
  render() {
   
    return (
        <div>
        
      <Loader isLoading={this.props.isLoading}></Loader>
         <MobileOnlyView> 
          <Hamburger style={{zIndex:50}}></Hamburger>
         </MobileOnlyView> 
         
         <Sider width={300} style={{
         overflow: 'auto',zIndex:100 ,height: '100vh', position: 'fixed', left: -300
          }}>
        <MenuApp id={''}></MenuApp>
         </Sider>
         <Content style={{width:'100vw'}}>
         <Header title={this.props.title} soustheme={this.props.soustheme} theme={this.props.theme} serie={this.props.serie}></Header>
         {!this.props.isBegin ?
      <Quiz level={this.props.level} exercice={this.props.exercice}></Quiz>
         :  (isTablet || isBrowser) ? <House section={"numerique"}></House> : <div> <div style={styles}>
           <p>Sélectionnez votre série à partir du menu.</p>
         </div>
         <div><img className="Logomobile" src={logo} alt="Logo"></img></div>
        <div><img className="hyperbole" src={hyperbole} alt="hyperbole"></img></div></div>
         }
        </Content></div>
         
    )
  }
}

const mapStateToProps = state => {
  
     if(state.appReducer)
     {return {
        title:  state.appReducer.TITLE,
        theme:  state.appReducer.THEME,
        soustheme:  state.appReducer.SOUSTHEME,
        serie:  state.appReducer.SERIE,
        exercice: state.appReducer.EXERCICES,
        level : state.appReducer.LEVEL,
        isLoading : state.appReducer.isLoading,
        isBegin: state.appReducer.isBegin
       
    }} else return {}
  }
  
  export default connect(
    mapStateToProps
  )(QuizApp)
