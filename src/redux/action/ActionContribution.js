import Axios from "axios"

export const getContributionList=(offset,limit)=>{
    console.log(offset,limit);
    return async dispatch=>{
        try{
            let result= await Axios({
               url:`https://greenplus-dev.herokuapp.com/contributions/published?offset=${(offset-1)*limit}&limit=${limit}`,
               method:'GET'
            })
            dispatch({
                type:'GET_CONTRIBUTION',
                contribution:result.data
            })
        }catch(err){
            console.log(err.response?.data);
        }
      
    }
}