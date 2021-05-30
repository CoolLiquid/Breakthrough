

const ACTION_ADD = "action_add";
const ACTION_REMOVE = "action_remove";

export function reducer(state = 10, action) {
    switch(action.type) {
        case ACTION_ADD:
            return state + 1
        case ACTION_REMOVE:
            return state - 1;
        default:
            return 10;
    }
}

export function add(){
    return { type : ACTION_ADD }
}

export function remove(){
    return {type : ACTION_REMOVE}
}

export function addAsync(){
    return dispatch => {
        setTimeout(()=>{
            dispatch(add())
        } 
        ,2000)
    }
}

