import styled from 'styled-components';

const HeaderStyle = styled.div `


#module-maths-header {
    width: 100%;
    min-height: ${props => props.headerHeight};
    max-height: ${props => props.headerHeight};
    background-color: #4257b2;
    position: fixed;
    z-index: 1;
    box-shadow: 0px 5px 8px rgba(0, 10, 20, 0.06);


    .module-maths-logo-container{
        z-index : 999;
        cursor : pointer;
        position: absolute;
         width: 190px;
    }


    .module-maths-title{
        display: inline-block;
        font-size: 25px;
        padding-top: 17px;
        padding-bottom:17px;
        padding-left: 20px;
        position :absolute;
        color : #ffffff;
    }

    #module-maths-header-menu-container {
        position : absolute;
        right : ${props => props.headerRight};
        top : 0


        li {
            font-weight : bold
        }
    }

    

   #module-maths-header-container {
    margin: 0 auto;
    width: 100%;
    min-height: ${props => props.headerHeight};
    max-height: ${props => props.headerHeight};
    padding: 10px 0;
    position: relative;
    text-align: center;
    padding-right: 0px;
    padding-left: 0px;
    color : #ffffff;


    .module-maths-theme {
    
    font-weight: 700;
    font-size: ${props => props.textSizeTheme};
    color: #3ccfcf;
}

    .module-maths-serie {
        font-size: ${props => props.textSizeSerie};
    }
}



}

`
export default HeaderStyle