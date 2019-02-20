import styled from 'styled-components';

const ItemStyle = styled.div `

max-height: 65px;


.quiz-answer {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: linear-gradient(#fafafc, white);
    box-shadow: 0px 2px 2px 1px rgba(0, 10, 20, 0.07);
    max-height: 65px;
    
    &.validate .feedback {
    visibility: visible;
    -webkit-animation: feedbackfade 3s ease 3s;
    animation: feedbackfade 3s ease 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

  &.correct .feedback {
    background-color: #00ccaa;
}

    p {
    display: block;
    margin: 1em;
    z-index: 10;
}

    input {
    display: none;
    }

    input:checked ~ .highlight {
    background-color: #ffdf44;
}
    .highlight {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

input:checked ~ .circle {
    background-color: #fafafc;
    border-color: #dd0077;
}


    .circle {
    position: relative;
    height: 1em;
    width: 1em;
    margin-left: 1em;
    flex: 0 0 auto;
    border-radius: 50%;
    border: 0.3em solid #666677;
    background-color: #888899;
}
.validate .feedback {
    visibility: visible;
    -webkit-animation: feedbackfade 3s ease 3s;
    animation: feedbackfade 3s ease 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
/*input:checked ~ .feedback {
    visibility: visible;
    -webkit-animation: feedbackfade 3s ease 3s;
    animation: feedbackfade 3s ease 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}*/

@-webkit-keyframes feedbackfade {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes feedbackfade {
    from {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
  

.feedback {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #dd0077;
    color: white;
    min-height: 100%;
    max-width: 88.6%;
    padding: 1em 1em 1em 2em;
    z-index: 100;
    opacity: 1;
    visibility: hidden;
    -webkit-clip-path: polygon(1.25em 0, 100% 0, 100% 100%, 1.25em 100%, 0 50%);
    clip-path: polygon(1.25em 0, 100% 0, 100% 100%, 1.25em 100%, 0 50%);
}

&.bilan {
&.correct {
    .feedback {
background-color: #00ccaa;
visibility: visible;
    }
}
&.nocorrect {
    .feedback {
background-color: #dd0077;
visibility: visible;
}}

}
}

`
export default ItemStyle