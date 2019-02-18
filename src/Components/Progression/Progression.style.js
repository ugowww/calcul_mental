import styled from 'styled-components'

export const ProgressionStyle =styled.div `

.indicators {
    margin-top: 10px;
    padding-left: 10px;
    padding-right:10px;
    padding-top: ${props => props.positionTop};
    padding-bottom: ${props => props.positionTop};
    position: absolute;
    text-align: right;
    right: 10px;

    .line{
    &.active{
        stroke: #4257b2;
    }
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

    

    &.error {
        fill: #dd0077;
    }

    &.good {
        fill: #00ccaa;
    }
    &.active{
         fill: #4257b2;
    }

    


 
   
    
}}


`


