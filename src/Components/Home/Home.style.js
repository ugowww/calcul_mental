import styled from 'styled-components';

const HomeStyle = styled.h1 `
    font-size: 19px;
    font-weight: 500;
    color: #455358;
    width: 100%;
    margin-right: 17px;
    margin-bottom: 30px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    
    &:before {
      content: '';
      width: 5px;
      height: 40px;
      background-color: #455358;
      display: flex;
      margin: 0 15px 0 0;
   } 

    &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color:#455358;
    display: flex;
    margin: 0 0 0 15px;
    }
    
` 

export default HomeStyle

