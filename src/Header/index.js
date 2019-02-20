import React, { Component } from 'react';
import HeaderStyle from './header.style';
import {Menu,Icon} from 'antd';
import MathJax  from 'react-mathjax'
import {connect} from 'react-redux';
import {GotoHome,Retry} from '../actions';
import {isMobileOnly,isTablet,isBrowser} from "react-device-detect";
import Logo from '../Assets/nathan155.jpg';

class index extends Component {

    state = {
        current: '',
      }

      handleClick = (e) => {
        if(e.key ==="section") {
          alert('ok')
        }
        else if(e.key ==="home") {
          this.props.gotoHome();
        } else {
          this.props.retry();
        }
      }

      renderTest(txt){
        if(txt.indexOf('$')===-1) {
          return txt
        }

        return txt.split('$').map(function(item, i){
         
          if(item.indexOf('Formule')===-1) {
             return <span key={'item_'+i}>{item}</span>
           } else {
             return <MathJax.Node key= {`node_${i}`} inline formula={item.split('Formule')[1]} />
           }
          
         })
       }


  render() {
    const {textSizeTheme} = isMobileOnly ? {textSizeTheme: "13px"} : isTablet ? {textSizeTheme: "20px"}:{textSizeTheme: "25px"}
    const {textSizeSerie} = isMobileOnly ? {textSizeSerie: "9px"} : isTablet ? {textSizeTheme: "16px"}: {textSizeSerie: "20px"}
    const {headerHeight} = isMobileOnly ? {headerHeight: "40px"} : {headerHeight: "60px"}
    const {lineHeight} = isMobileOnly ? {lineHeight: "38px"} : {lineHeight: "58px"}
    const {headerRight} =  isMobileOnly ? {headerRight: "0px"} : {headerRight: "10px"}
    const {title,theme,serie,soustheme,isBegin,isShowHome} = this.props
    
   
    return (

        <HeaderStyle headerRight={headerRight} headerHeight={headerHeight} textSizeTheme={textSizeTheme} textSizeSerie={textSizeSerie}>
        <div id="module-maths-header">
            <div onClick={(e)=> this.props.gotoHome()} className="module-maths-logo-container">
            { isBrowser ? <div><div className="hyperboleheader">Hyperbole</div> 
                <div className="module-maths-title">{title}</div></div> : null }
            </div>
            <div id="module-maths-header-container">
                <p className="module-maths-theme">{theme}</p>
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
                <p className="module-maths-serie">{this.renderTest(soustheme)} {serie}</p>  
            </MathJax.Provider></div>
                <p className="module-maths-serie">{this.renderTest(soustheme)}<span className="demo-divider"> | </span>{serie}</p>  
            </MathJax.Provider>{ isBrowser && !isShowHome && isBegin ? <span className="logoheadercontainer"><img className="logoheader" alt="logoheader" src={Logo}></img></span> : null }</div>
            <div id="module-maths-header-menu-container">
          <Menu
        style ={{lineHeight:lineHeight}}
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
         {(this.props.TRY===2 && this.props.LEVEL===4) || this.props.MODE ? 
        isMobileOnly ?    <Menu.Item key="retry"><Icon key="retry"  type="undo" style={{marginRight:0}}/></Menu.Item> :
        <Menu.Item key="retry" style={{marginRight:0,borderRight: '2px solid #4257b2'}}>Recommencer la série</Menu.Item> 
        : null}
   
        {isShowHome ?   <Menu.Item key="home">
          Accueil
        </Menu.Item>  : null}

        {!isBegin ? isMobileOnly ?  
        null
        :
        <Menu.Item key="home">
          Accueil
        </Menu.Item> 
        : null}
      </Menu> 
            </div>
        </div>
        </HeaderStyle>
    )
  }

}

const mapStateToProps = state => {
  //  console.log('recerive', state.appReducer.isBegin)
  return {
      TRY:  state.appReducer.TRY,
      LEVEL : state.appReducer.LEVEL,
      MODE : state.appReducer.MODE,
      isBegin : state.appReducer.isBegin,
      isShowHome : state.appReducer.isShowHome
  }}
  
  const mapDispatchToProps = dispatch => {
      return {
        gotoHome: () => { 
          dispatch(GotoHome());
        },
        retry: () => { 
          dispatch(Retry());
        }
    }
  }
  
  export default connect(
   
    mapStateToProps,
      mapDispatchToProps
    )(index)



