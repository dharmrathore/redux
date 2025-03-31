
const initialState = {
    isAuthenticated : false,
    user : null,
    usersList: []
   
}

const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('action',action)
            return {
               ...state,
                isAuthenticated : true,
                user : action.payload,
                usersList: [...state.usersList, action.payload]
               
        
            }
            case 'LOGOUT':
                return{
                    ...state,
                    isAuthenticated : false,
                    user : null,
    
                }
        default:
            return state;
        
    }

}

export default authReducer;