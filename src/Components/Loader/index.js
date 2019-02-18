import React, { Component } from 'react';
import {notification, Spin} from 'antd';
import { connect } from 'react-redux';
import LoaderStyle from './Loader.style'

const  openNotificationWithIcon = (type) => {
    return notification[type]({
       message: 'Information',
       description: 'Le fichier correspondant à la série sélectionnée n\'existe pas.',
     });
    
   };

class index extends Component {

    render() {
        const {isLoading,error} = this.props
  
        return (
            error ? <div className="">{openNotificationWithIcon('error')}</div> : 
            isLoading ? 
            <LoaderStyle>
            <div className="module-maths-loader">
            <Spin size="large" tip="Chargement..."></Spin>
            </div>
            </LoaderStyle>
            : null
        );
    }
}
function mapStateToProps(state) {
   
    return {
      isLoading : state.appReducer.isLoading,
      error : state.appReducer.error
    };
}
export default connect(
    mapStateToProps,
)(index);