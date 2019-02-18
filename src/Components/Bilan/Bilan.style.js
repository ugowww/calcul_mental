import styled from 'styled-components';

const BilanStyle = styled.div `

 #container-bilan {

    position : relative;
    text-align : center;

    img {
        max-width : ${props => props.imgWidth};
        width : ${props => props.imgWidth};
        height : auto;
        margin-bottom:10px;
    }
 .message-bilan {
     font-size:18px;
 }
 }


`

export default BilanStyle