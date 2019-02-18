import styled from 'styled-components';

const NavigationStyle = styled.div `

.module-maths-prev {

    position: absolute;
    bottom: 11px;
    left: 11px;
    color: black;
    cursor: pointer;
    
    .back-link {
    position: absolute;
    color: black;
    bottom: 0px;
    left :0px;
    top : -28px;
    left : 28px;
    width: 56px;
    height: 56px;
    
   

   .arrow-next {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../Assets/images/back.svg);
    background-repeat: no-repeat;
    width: 56px;
    height: 56px;
    background-position: 28px 28px;
}
    }

    .back-link.over {
    .arrow-left {
        background-position: 0px 28px;
    }}
}

.module-maths-validate {
    position: absolute;
    bottom: 11px;
    left : 0;
    right : 0;
}

.module-maths-next {
    position: absolute;
    bottom: 8px;
    right: 11px;
    color: black;
    cursor: pointer;
    z-index : 99;

    

    .back-link {
    position: absolute;
    bottom: 0px;
    right :0px;
    color: black;
    width: 28px;
    height: 28px;
    overflow: hidden;
   
   

    
    .arrow-left {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background-image: url(../../Assets/images/next.svg);
    background-repeat: no-repeat;
    background-position: 28px 28px;
    top : -28px;
    right : 28px;
    width: 56px;
    height: 56px;
    
}
}

.back-link.over {
    .arrow-left {
        background-position: 0px 28px;
    }}
}
`
export default NavigationStyle
