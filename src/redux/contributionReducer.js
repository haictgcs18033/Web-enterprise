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
    },
    contributionComment:[]
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
        case 'UPDATE_CONTRIBUTION':{
            const newContributionList = state.contributionList.map((contribution,index) => {
                if (contribution.id === action.contribution.id) {
                    return {
                        ...contribution,
                        name: action.contribution.name,
                        description: action.contribution.description,
                    };
                }
                return contribution;
            });
           return{ ...state,contributionList:newContributionList}
        }
        case 'DELETE_CONTRIBUTION':{
            let contributionUpdate=[...state.contributionList]
            contributionUpdate=contributionUpdate.filter(contribute=>contribute.id!==action.id)
            state.contributionList=contributionUpdate
            return{...state}
        }
        case 'PUBLISH_CONTRIBUTION':{
          state.contributionPublishList=[...state.contributionPublishList,action.contribution]
           let newContributionList=[...state.contributionList]
           newContributionList=newContributionList.filter(contribute=>contribute.id!==action.contribution.id)
           state.contributionList=newContributionList
          return{...state} 
        }
        case 'GET_CONTRIBUTION_BY_ID':{
            return{...state.contributionComment,contributionComment:action.contribution}
        }
        case 'ADD_COMMENT':{
            state.contributionComment=[...state.contributionComment,action.contributionComment]
            return{...state}
        }
        default:{
            return{...state}
        }
            
    }
}
