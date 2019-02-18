

import {types} from './types'

const initState = {
    TITLE : "Calcul Mental",
    THEME: "Mathématiques",
    SOUSTHEME: "Niveau",
    SERIE: "Lycée",
    EXERCICES: [{
        image: '',
        solution: '',
        propositions: [],
        consigne :''
    }],
    COLOR : '#FFFFFF',
    LEVEL : 0, // progression de l'activité
    USER_CHOICES: [],  // enregistrement des choix de l'utilisateur
    BILAN : [], // 
    TRY : 0 ,// état du nombre d'essai pour la question en cours
    SELECT : 0,
    VALIDATE : 0,
    isLoading :0, // état de l'app (animation ?)
    isBegin : 1, // état de l'app (affichage message au début)
    MODE : 0, // Mode de l'app : 1 => correction
    ID : "", // Fichier
    isShowHome : 0


}


export default function appReducer(state = initState, action) {
 
    switch (action.type) {

        case types.GOTO_SECTION :
      
        return {
          ...state,
          isShowHome : 1,
        }

        case types.GOTO_HOME :
        
        state.TRY = 0 ;
        state.SELECT = 0;
        state.VALIDATE = 0;
        state.isLoading =0;
        state.MODE = 0;
        state.LEVEL = 0;
        state.ID = "" ;
        state.BILAN = [];
        state.USER_CHOICES= [];
        state.EXERCICES = [{
          image: '',
          solution: '',
          propositions: [],
          consigne :''
      }];
        return {
          ...state,
          isBegin : 1,
          isShowHome : 0,
          THEME: "Mathématiques",
          SOUSTHEME: "Niveau",
          SERIE: "Lycée",

        }

        case types.RETRY : 
        state.TRY = 0 ;
        state.SELECT = 0;
        state.VALIDATE = 0;
        state.isLoading =0;
        state.MODE = 0;
        state.LEVEL = 0;
        state.BILAN = [];
        state.USER_CHOICES= [];
        return {
          ...state,
          isShowHome : 0
          
        }
      
        case types.ADD_TODO_STARTED:
        state.TRY = 2 ;
        state.SELECT = 0;
        state.VALIDATE = 0;
        state.isLoading =0;
        state.MODE = 0;
        state.LEVEL = 0;
        state.ID = "" ;
        state.BILAN = [];
        state.COLOR = "#ffffff";
        state.USER_CHOICES= [];
        state.EXERCICES = [{
          image: '',
          solution: '',
          propositions: [],
          consigne :''
      }];
          return {
            ...state,
            ID : action.id,
            isLoading: 1,
            error : false,
            isShowHome : 0
            

          };
          case types.ADD_TODO_SUCCESS:
          
          state.TRY = 0 ;
          state.LEVEL = 0;
          
          return {
            ...state,
            isLoading: 0,
            isBegin :0,
            error : false,
            isShowHome : 0,
            ...action.payload.data
          };

          case types.ADD_TODO_FAILURE:
          return {
            ...state,
            error : true
          }

          case types.NEXT_QUESTION :
          

          return {
            ...state,MODE : state.MODE, LEVEL :state.LEVEL+=1, SELECT : 0,TRY : state.MODE ? 2 :0,VALIDATE :0
          }

          case types.PREV_QUESTION :
          return {
            ...state, MODE: state.MODE=1,LEVEL :state.LEVEL-=1, SELECT : 0,TRY : 2,VALIDATE :0
          }

          case types.VALIDATE_QUESTION : 
          let _choice = state.USER_CHOICES[state.LEVEL];
          let _good_answer = state.EXERCICES[state.LEVEL].solution
         
          let _try = state.TRY;
          (!_try || _try<2) ? state.TRY+=1 : state.TRY=0
          

          if(Number(_choice)===Number(_good_answer)-1) {
            
            state.BILAN[state.LEVEL]=1
            state.TRY=2
          } else {
            state.BILAN[state.LEVEL]=0
            state.SELECT = 0
          }
          if(state.TRY===2){
            state.SELECT = 1
          }
          
          return {
            ...state,
            TRY : state.TRY,
            VALIDATE : 1
           
            
          
          }
          case types.ADD_USER_CHOICE : 
          state.USER_CHOICES[state.LEVEL] = action.choice.id
          return {
            ...state,
            SELECT : 1,
            VALIDATE : 0
          }

          default:
          return state;
    }

}