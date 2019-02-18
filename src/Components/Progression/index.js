import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {ProgressionStyle} from './Progression.style'
import {isMobileOnly} from "react-device-detect";
class index extends PureComponent {

// TO Generate progression with map

    generateCircleCLass(n){
      
        let i =0;
        for(i; i <this.props.bilan.length;i++) {
            if(this.props.bilan[n]===0) {
                return 'error'
            } else if(this.props.bilan[n]===1) {
                return 'good'
            } else if(n===Number(this.props.level))  {
            return 'active'}
            else return ''
        }
        if(!this.props.bilan.length) {
            if(n===Number(this.props.level))  {
                return 'active'}
        } 
        
        
    }

    generateLineCLass(n){
            if(n===Number(this.props.level))  {
                return 'active'}
        
    
    }

    render() {
        const {positionTop} = isMobileOnly ? {positionTop:'0px'} : {positionTop:'10px'}
        return (
            <ProgressionStyle positionTop={positionTop}>
            <div className="indicators">
            <span className="indicator index1">
             <svg width="110px" height="20px" viewBox="0 0 110 20">
             <g id="multiScreenshotPreview">
             
             
             <circle className={"circle first-circle " +this.generateCircleCLass(0)} fill="#e0e0e0" cx="8" cy="8" r="8" data-indexnum="0"></circle>
             <circle className={"circle second-circle " +this.generateCircleCLass(1)} fill="#e0e0e0" cx="31" cy="8" r="8" data-indexnum="1"></circle>
             <circle className={"circle third-circle " +this.generateCircleCLass(2)} fill="#e0e0e0" cx="54" cy="8" r="8" data-indexnum="2"></circle>
             <circle className={"circle fourth-circle " +this.generateCircleCLass(3)} fill="#e0e0e0" cx="77" cy="8" r="8" data-indexnum="3"></circle>
             <circle className={"circle fifth-circle " +this.generateCircleCLass(4)} fill="#e0e0e0" cx="100" cy="8" r="8" data-indexnum="4"></circle>

             <path d="M0,18 L16,18" className={"line line-01 " + this.generateLineCLass(0)}  stroke="#e0e0e0" strokeWidth="2" strokeLinecap="square"></path>
             <path d="M23,18 L39,18" className={"line line-02 "+ this.generateLineCLass(1)}  stroke="#e0e0e0" strokeWidth="2" strokeLinecap="square"></path>
             <path d="M46,18 L62,18" className={"line line-03 "+ this.generateLineCLass(2)}  stroke="#e0e0e0" strokeWidth="2" strokeLinecap="square"></path>
             <path d="M69,18 L86,18" className={"line line-04 "+ this.generateLineCLass(3)}  stroke="#e0e0e0" strokeWidth="2" strokeLinecap="square"></path>
             <path d="M93,18 L109,18" className={"line line-05 "+ this.generateLineCLass(4)}  stroke="#e0e0e0" strokeWidth="2" strokeLinecap="square"></path>
             </g>
             </svg>   
            </span></div>
            </ProgressionStyle>
        );
    }
}



const mapStateToProps= state => {
      return {
         level : state.appReducer.LEVEL,
         bilan : state.appReducer.BILAN
     };
 }

export default connect(
    mapStateToProps
)(index);