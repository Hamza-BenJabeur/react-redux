import * as actions from './actionsTypes';
let inc=0;
export const increment=()=>{
    return{
        type :actions.INCREMENT
        
    }

}
export const decrement=()=>{
    return{
        type :actions.DECREMENT

    }

}
export const isLoggin=()=>{
    return {
        type:'SignIN'
    }
}

export const bugadded=(description)=>{
    return {
        type:"bugAdded",
        payload:{
            description:`${description} ${++inc}`
        }
    }
}
export const bugRemoved=(id)=>{
    return {
        type:"bugRemoved",
        payload:{
            id
        }
    }
}
export const bugResolved=(id)=>{
    return {
        type:"bugResolved",
        payload:{
            id
        }
    }
}

