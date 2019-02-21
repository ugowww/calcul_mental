import React, { Component } from 'react'
import HamburgerStyle from './Hamburger.style'

export default class index extends Component {
  
    actionDrawer(){
        document.body.classList.toggle('drawer-open')
    }
  
    render() {
    return (
      <HamburgerStyle>
        <button onClick={e => this.actionDrawer()} type="button" className="drawer-toggle drawer-hamburger"> 
           <span className="sr-only">toggle navigation</span>
           <span className="drawer-hamburger-icon"></span>
        </button>
      </HamburgerStyle>
    )
  }
}
