const loggedReducer=(state=false,action)=>{
switch(action.type){
    case 'SignIN':
        return !state;
        default :  
        return state;
}

}
export default loggedReducer