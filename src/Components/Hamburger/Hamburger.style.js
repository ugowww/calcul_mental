import styled from 'styled-components';


const HamburgerStyle = styled.div `


 {
 z-index : 50
}

.drawer-hamburger {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    display: block;
    box-sizing: content-box;
    width: 1.5rem;
    padding: 0;
    padding: 10px .5rem 20px;
    -webkit-transition: all .6s cubic-bezier(.19,1,.22,1);
    transition: all .6s cubic-bezier(.19,1,.22,1);
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    border: 0;
    outline: 0;
    background-color: transparent;
    
    :hover {
    cursor: pointer;
    background-color: transparent;
    }

    .drawer-hamburger-icon {
    position: relative;
    display: block;
    margin-top: 10px;
    width: 100%;
    height: 2px;
    -webkit-transition: all .6s cubic-bezier(.19,1,.22,1);
    transition: all .6s cubic-bezier(.19,1,.22,1);
    background-color: #ffffff;

    :before {
    position: absolute;
    top: -10px;
    left: 0;
    content: " ";
    width: 100%;
    height: 2px;
    -webkit-transition: all .6s cubic-bezier(.19,1,.22,1);
    transition: all .6s cubic-bezier(.19,1,.22,1);
    background-color: #ffffff;
    }

    :after {
    position: absolute;
    top: 10px;
    left: 0;
    content: " ";
    width: 100%;
    height: 2px;
    -webkit-transition: all .6s cubic-bezier(.19,1,.22,1);
    transition: all .6s cubic-bezier(.19,1,.22,1);
    background-color: #ffffff;
}
    }


    .sr-only {
    position: absolute;
    overflow: hidden;
    clip: rect(0,0,0,0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}

}

`


export default HamburgerStyle