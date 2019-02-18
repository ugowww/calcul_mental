
import axios from 'axios';
import {types} from './types';
import {App} from './constants';
import {parseTXT} from './Utils'

   
/** LOAD FILE */

export const loadFile = ({ file_id }) => {
       
        return dispatch => {
        dispatch(addTodoStarted(file_id));
        axios.get(App.path+file_id)
          .then(
              res => {
          dispatch(addTodoSuccess(parseTXT(res.data)));
              })
          .catch(err => {
            dispatch(addTodoFailure(err.message));
          });
      
        };
      };

      const addTodoSuccess = data => ({
        
        type: types.ADD_TODO_SUCCESS,
        payload: {
            data 
          }
    
      });

      const addTodoFailure = error => ({
        type: types.ADD_TODO_FAILURE,
        payload: {
            error
          }
      });


      const addTodoStarted = (id) => ({
        type: types.ADD_TODO_STARTED,
        id : id.split('.txt')[0]
      });

   

      export const Retry= () => {

        return dispatch => dispatch(retry())

      }
/** NAVIGATION */

      export const nextQuestion = () => {
        
        return dispatch => dispatch(nextLevel())
      }

      export const prevQuestion = () => {
      
        return dispatch => dispatch(prevLevel())
      }

      export const ValideQuestion= () => {

        return dispatch => dispatch(validateLevel())

      }

      export const GotoSection = ()=> {
        return dispatch => dispatch(gotosection())
      }
      

      export const GotoHome= () => {

        return dispatch => dispatch(gotohome())

      }
      const gotosection =() => ({
        type: types.GOTO_SECTION
      })
      const retry =() => ({
        type: types.RETRY
      })

      const gotohome =() => ({
        type: types.GOTO_HOME
      })

      const validateLevel =() => ({
        type: types.VALIDATE_QUESTION
      })


      const nextLevel =()=> ({
        type: types.NEXT_QUESTION
        
      })

      const prevLevel =()=> ({
        type: types.PREV_QUESTION
       
      })


/**  USER CHOICE */

      export const addUserChoice = (id) => {
      return dispatch => dispatch(UserChoice(id))
}

      const UserChoice =id=> 
        (
        {
          type: types.ADD_USER_CHOICE,
          choice: {
            id 
          }
        })

   



