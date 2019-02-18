import React, { Component } from 'react'
import MathJax  from 'react-mathjax'
import ItemStyle from './item.style'
import {Icon} from 'antd'
import {BrowserView,MobileView} from "react-device-detect";
import renderHTML from 'react-render-html';

export default class item extends Component {

    renderTest(){
     return this.props.formula.split('$').map(function(item, i){
      
       if(item.indexOf('Formule')===-1) {
          return <span key={'item_'+i}>{renderHTML(item)}</span>
        } else {
          return <MathJax.Node key= {`node_${i}`} inline formula={item.split('Formule')[1]} />
        }
       
      })
    }

    renderFormule(){
      return <MathJax.Node inline formula={this.props.formula} />
    }
    
  render() {
  
    return (
      this.props.type ? 
      <ItemStyle>
         <label className={this.props.addClass}>
         <input checked={Number(this.props.checked) === Number(this.props.id)} onChange={(e)=> {this.props.onChange(e)}} type="radio" value={this.props.id} name={"question-"+this.props.id}/>
         <div className="highlight"></div>
         <div className="circle"></div>
        <p>{this.renderTest()}</p> 
        
        <span className="feedback">
        <BrowserView>{this.props.message}</BrowserView>
        <MobileView><Icon  type={this.props.icon} /></MobileView>
        </span> 
      </label>
    </ItemStyle> :
    <p>{this.renderTest()}</p> 
    )
  }
}

