const initialState = "";

const textData = (state=initialState,actions)=>{
    switch(actions.type){
        case "updateText" : {
            state = actions.payload;
            return state; 
        }
        default : {return state;}
    }
}

export default textData;