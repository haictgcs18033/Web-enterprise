const stateContribution={
    contributionList:[]
}
export const  contributionReducer=(state=stateContribution,action)=>{
    switch (action.type) {
        case 'GET_CONTRIBUTION':{
            console.log(action.contribution);
             return {...state,contributionList:action.contribution.results}
        }
        default:{
            return{...state}
        }
            
    }
}