import React, { Component } from 'react';
import { Row, Col,Layout,Card,Collapse } from 'antd';
import renderHTML from 'react-render-html';
import {hexToRGB} from '../../Utils';
import HomeCardsStyle from './HomeCards.style';
import DataMenu from '../../MenuApp/datas';
import { connect } from 'react-redux';
import {loadFile,GotoSection} from '../../actions';


const RenderItem = props=> {
  
  return <p><a href='#/' onClick={(e)=>props.onClick(e)}>- {props.value}</a></p>
}

const {Content} = Layout;
const Panel = Collapse.Panel;
const populateMe =(section)=> {
  let arr = [];
 
  DataMenu.map((value,index) => { 
    arr.push(value)
    return false
  })
return arr
}

class index extends Component {


  

  constructor(props){
    super(props);
     this.state ={
    section : "numerique",
    num : populateMe(0) ,
    uniq : 0,
    id : 0,
    datas : []
  

  }
  }


  _onClick(e,ref) {
    this.setState ({uniq : 1,datas :this.state.num[ref]})
    this.props.gotoSection()
  }


  renderCard = (data)=> {
          
  return data.map((value,index) => {
     
      return (
    <Col key= {"col-"+index} xs = {{span: 24}} md = {{span: 12}} lg = {{span: 8}} ><div style={{  padding: '10px' }}>
    <Card ref={index} key= {"card-"+index} title={value.theme} onClick={(e,key)=>this._onClick(e,index)} bodyStyle={{display:'none'}}  headStyle={{cursor:'pointer',background: hexToRGB(value.color,0.2),borderBottom:'1px solid ' + value.color ,color:"#000000",textAlign:'center',fontWeight:600,fontSize: '0.975rem'}} bordered={true} style={{ width: 'auto',border:'1px solid '+value.color }}>
    {  value.soustheme.map((item,index) => {
      let _option = item.option;
    return  ( <Collapse  key={"collapse-"+index} accordion bordered={false}  >
    <Panel style={{fontSize: '0.875rem', background: hexToRGB(value.color,0.2),borderRadius: 4,marginBottom: 24,border: 0,overflow: 'hidden',}} header={renderHTML(item.title)} key="1">
      { item.serie.map((value,index) => {
        return <RenderItem  onClick={(e)=>this.props.onClick(e,'file_'+_option+"_"+Number(index+1))} key={'file_'+_option+"_"+Number(index+1)} value={value}></RenderItem>
 
      })}
    </Panel>
  </Collapse> )
    })}
  
    </Card>
  </div></Col>

      )

    });
   

  }


  renderUniqCard = (value) => {
   
    return  (
      <Col key= {"col-uniq"} style={{ float: 'none',margin : '0 auto'}} xs = {{span: 24}} md = {{span:12}} lg = {{span: 12}} ><div style={{  padding: '10px'}}>
      <Card ref={"uniq"} key= {"card-uniq"} title={value.theme}  headStyle={{background: hexToRGB(value.color,0.2),borderBottom:'1px solid' +value.color,color:"#000000",textAlign:'center',fontWeight:600,fontSize: '0.975rem'}} bordered={true} style={{ width: 'auto',border:'1px solid' +value.color,boxShadow:'0 0.3125rem 1rem 0 rgba(0,0,0,0.24)' }}>
      {  value.soustheme.map((item,index) => {
        let _option = item.option;
      return  ( <Collapse  key={"collapse-uniq-"+index} accordion bordered={false}  >
      <Panel style={{fontSize: '0.875rem', background: hexToRGB(value.color,0.2),borderRadius: 4,marginBottom: 24,border: 0,overflow: 'hidden',}} header={renderHTML(item.title)} key="1">
        { item.serie.map((value,index) => {
          return <RenderItem  onClick={(e)=>this.props.onClick(e,'file_'+_option+"_"+Number(index+1))} key={'file_'+_option+"_"+Number(index+1)} value={value}></RenderItem>
   
        })}
      </Panel>
    </Collapse> )
      })}
    
      </Card>
    </div></Col>
  
        ) 
    

  }

  renderCol =(section) => {
   
    let nbrCards = this.state.num.length;
    
    if(nbrCards) {
    return <Row className="home-cards" gutter={16}>
   {this.renderCard(this.state.num)}
   
   
   </Row>
    }


}

_onChange(e){
  this.setState({
  section : e.target.value
  })
}

    render() {

        const  {uniq,datas } = this.state;

        return (
            <Layout>
            <Content style={{width:'100%', padding: '100px 20px' }}>
           
      
        <React.Fragment>
       { (!uniq) || (!this.props.isShowHome && !this.props.isLoading)  ?  <HomeCardsStyle>{this.renderCol()}</HomeCardsStyle> : <HomeCardsStyle>{this.renderUniqCard(datas)}</HomeCardsStyle> }
        </React.Fragment>
        
           

  </Content></Layout>
        );
    }
}
const mapStateToProps = state => {
   
  return {
  
      isShowHome : state.appReducer.isShowHome,
      isLoading :state.appReducer.isLoading
  }}


const mapDispatchToProps = dispatch => {
  return {

    gotoSection: () => { 
      dispatch(GotoSection());
    },

      onClick: (e,key) => { 
      let _file  =key.split('file_')[1]
      dispatch(loadFile({
         file_id : _file+".txt"
       }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index)