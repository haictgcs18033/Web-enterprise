import Axios from "axios"
import swal from "sweetalert";

export const getContributionPublishList=(offset,limit)=>{
    console.log(offset,limit);
    return async dispatch=>{
        try{
            let result= await Axios({
               url:`https://greenplus-dev.herokuapp.com/contributions/published?offset=${(offset-1)*limit}&limit=${limit}`,
               method:'GET'
            })
            dispatch({
                type:'GET_CONTRIBUTION_PUBLISH',
                contribution:result.data
            })
        }catch(err){
            console.log(err.response?.data);
        }
      
    }
}
export const getContributionList=(offset,limit)=>{
    return async dispatch=>{
         try{
           let result=await Axios({
               url:`https://greenplus-dev.herokuapp.com/contributions?offset=${(offset-1)*limit}&limit=${limit}`,
               method:'GET',
               headers:{'Authorization':'Bearer '+localStorage.getItem('ACCESS_TOKEN')}
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
export const handleInput=(newValues)=>{
    return {
        type:'INPUT_CONTRIBUTION',
        contribution:{
            values:newValues
        }
    }
}
export const submitContribution=(formInput)=>{
    const formData=new FormData()
      for(let item in formInput){
          formData.append(item,formInput[item])
      }
     
    return async dispatch=>{
         try{
           let result=await Axios({
               url:'https://35.224.120.132/contributions',
               method:'POST',
               data:formData,
               headers:{'Authorization':'Bearer '+localStorage.getItem('ACCESS_TOKEN')}
           })
           dispatch({
            type:'CREATE_CONTRIBUTION',
            contribution:result.data
        })
           swal({
            title: 'Success',
            text: 'Contribution added successfully',
            icon: 'success',
            button: 'OK',
        });
      
         }catch(err){
             console.log(err.response?.data);
         }
    }
}
export const handleDeleteContribution=(id)=>{
      return async dispatch=>{
          try{
             await Axios({
                 url: `https://greenplus-dev.herokuapp.com/contributions/${id}`,
                 method:'DELETE',
                 headers:{'Authorization':'Bearer '+localStorage.getItem('ACCESS_TOKEN')}
             })
             dispatch({
                 type:"DELETE_CONTRIBUTION",
                 id:id
             })
             swal({
                title: 'Success',
                text: 'Contribution deleted successfully',
                icon: 'success',
                button: 'OK',
            });
          }catch(err){
              console.log(err.response?.data);
          }
      }
}