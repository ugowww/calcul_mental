import React, { Component } from 'react'
import {Menu,Icon} from 'antd';
import renderHTML from 'react-render-html';
import DataMenu from './datas';
import {loadFile} from '../actions';
import { connect } from 'react-redux';
const {SubMenu} = Menu

let rootSubmenuKeys = [];
let newArray = [];
class index extends Component {
     
    state = {
        openKeys: [],
        openKeyssubsub: [],
        openKeyssub : [],
    }

     RenderSubMenu =(e,option) =>{
      
         let data = e.map((item,index) => {
           
         if(item.serie.length) {
          let _option = item.option
         
           //rootSubmenuKeys.push('subMenu_'+item.option+"_"+index)
         
          return (
           
            
          
            <SubMenu  key={'subsubMenu_'+item.option+"_"+index} title={<span style={{display:'flex'}}><Icon  type="folder" /><span>{renderHTML(item.title)}</span></span>}>
             
             {   item.serie.map((child,index) => {
             
                    return (
              <Menu.Item  data-file={'file_'+_option+"_"+Number(index+1)} key={'file_'+item.option+"_"+Number(index+1)} onClick={(e)=>this.props.onClick(e)}>
              <Icon type="right-circle"  />
              {child}
              </Menu.Item>
            
                    )
                })}
          </SubMenu>  )

         } else {
             return (
                <Menu.Item className='ant-menu-item' key={item.title}>
                <Icon type="right-circle"/>
                <span className="nav-text">{item.title}</span>
                </Menu.Item>
             )
         }
       
        }
         )
     
        return data
        
     }

    RenderMenu =  () => {
      DataMenu.map((item,index) => (
         item.soustheme.length ?rootSubmenuKeys.push('subMenu_'+index+"_"+item.option) : []
      ))

        let data = DataMenu.map((item,index) => (
       
        item.soustheme.length ? 
         
         <SubMenu key={'subMenu_'+index+"_"+item.option} title={<span><Icon  type="folder" /><span>{item.theme}</span></span>}>
            {this.RenderSubMenu(item.soustheme,item.option)}    
         </SubMenu>
        
        : 
         <Menu.Item key={index}>
         <Icon type="user" />
         <span className="nav-text"></span>
         </Menu.Item>
     
     ))
     return data
    
  }

    onOpenChange = (openKeys) => {
     console.log(openKeys);

     // 
     console.log(openKeys[openKeys.length-1])
    let lastKEY =openKeys[openKeys.length-1];
    
      if(lastKEY.indexOf('subsub')>-1) {
        console.log('find')
        openKeys.map=(item) => {
          if(item.indexOf('subsub')>-1) {
            console.log("add")
            newArray.push(item)
          } else {
           
          }
        }
      }
      newArray.push(lastKEY)
     console.log("newArray",newArray)
     
      this.setState({ openKeys:newArray });
     

      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      } 
    }

  render() {
  
    return (
      <div>
        <div className="module-maths-logo module-maths-title">Calcul Mental</div>
        <Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} style={{paddingTop: '40px'}} inlineIndent={5} theme="dark" mode="inline" >{this.RenderMenu()}</Menu>
      </div>
    )
  }

  
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (e) => { 
        document.body.classList.toggle('drawer-open')
        let _file  =e.key.split('file_')[1]
        dispatch(loadFile({
           file_id : _file+".txt"
         }));
      }
    };
  };

export default connect(
 null,
    mapDispatchToProps
  )(index)
