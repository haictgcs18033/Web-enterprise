const stateContribution={
    contributionPublishList:[],
    contributionList:[],
    contribution:{
        values:{
            files:'',
            thumbnail:'',
            name:'',
            description:''
        }
    }
}
export const  contributionReducer=(state=stateContribution,action)=>{
    switch (action.type) {
        case 'GET_CONTRIBUTION_PUBLISH':{
             return {...state,contributionPublishList:action.contribution.results}
        }
        case 'GET_CONTRIBUTION':{
             return {...state,contributionList:action.contribution.results}
        }
        case 'INPUT_CONTRIBUTION':{
            return {...state,contribution:action.contribution}
        }
        case 'CREATE_CONTRIBUTION':{
            state.contributionList=[...state.contributionList,action.contribution]
            return{...state}
        }
        case 'DELETE_CONTRIBUTION':{
            let contributionUpdate=[...state.contributionList]
            contributionUpdate=contributionUpdate.filter(contribute=>contribute.id!==action.id)
            state.contributionList=contributionUpdate
            return{...state}
        }
        default:{
            return{...state}
        }
            
    }
}
