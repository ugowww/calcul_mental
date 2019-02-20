import styled from 'styled-components';

const QuizStyle = styled.div `

.module-maths-maths-box {
    z-index: 0;
    position: absolute;
    margin: 0px auto 20px;
    max-width: 1024px;
    width: 100%;
    min-height: 500px;
    border-radius: 15px;
    background: #FFFFFF;
    top: 50%;
    left: 50%;
    margin-left: -512px;
    margin-top: ${props => -props.windowHeight/2 +"px"};
    border: 1px solid #4257b2;
    box-shadow: 0 0.3125rem 1rem 0 rgba(0,0,0,0.24);

    .quiz {
    margin: auto;
    width: 100%;
    max-width: 100em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5em;
    margin-bottom: 0px;
    padding-top: 35px;
    padding-bottom :10px;
    min-height : ${props => props.windowMinHeight+"px"};
    height : ${props => props.windowHeight+"px"};
    

    .module-maths-maths-consigne {
    margin-top: 5px;
    padding-left:${props => props.paddingLeft};
    }

    .module-maths-maths-image.mobile {
        width: 100%;
        height: 100px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 500px;
        margin: 0 auto;
    }

    .module-maths-maths-image{
        width: 100%;
        height: 220px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        max-width: 500px;
       margin: 0 auto;
    

    &.no-image {
        height: 0px;
        display:none;
    }
    }

}}

`


export default QuizStyle