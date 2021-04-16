/** @format */

import Axios from 'axios';

import swal from 'sweetalert';

export const getContributionPublishList = (offset, limit, idFaculty) => {
    return async (dispatch) => {
        try {
            const result = await Axios({
                url: `https://35.224.120.132/contributions/published?offset=${(offset - 1) * limit
                    }&limit=${limit}${idFaculty ? `&facultyId=${idFaculty}` : ''
                    }&viewOrderType=DESC`,
                method: 'GET',
            });
            dispatch({
                type: 'GET_CONTRIBUTION_PUBLISH',
                contribution: result.data,
            });
            return result;
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const getContributionList = (offset, limit, isPublish) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://35.224.120.132/contributions?&offset=${(offset - 1) * limit
                    }&limit=${limit}`,
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'GET_CONTRIBUTION',
                contribution: result.data,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handleInput = (newValues) => {
    return {
        type: 'INPUT_CONTRIBUTION',
        contribution: {
            values: newValues,
        },
    };
};
export const submitContribution = (formInput, history) => {
    const formData = new FormData();

    for (let item in formInput) {
        formData.append(item, formInput[item]);
    }
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://35.224.120.132/contributions',
                method: 'POST',
                data: formData,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'CREATE_CONTRIBUTION',
                contribution: result.data,
            });
            history.push('/');
            swal({
                title: 'Success',
                text: 'Contribution added successfully',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handlePublishById=(id)=>{
    return async dispatch=>{
        try{
            let result = await Axios({
                url:`https://35.224.120.132/contributions/published/${id}`,
                method:'GET',
            })
            dispatch({
                type:'GET_CONTRIBUTION_PUBLISHED_BYID',
                contribution:result.data
            })
        }catch(err){
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    }
}
export const handleDeleteContribution = (id) => {
    return async (dispatch) => {
        try {
            await Axios({
                url: `https://35.224.120.132/contributions/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'DELETE_CONTRIBUTION',
                id: id,
            });
            swal({
                title: 'Success',
                text: 'Contribution deleted successfully',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handleDeleteContributionPublish = (id) => {
    return async (dispatch) => {
        try {
            await Axios({
                url: `https://35.224.120.132/contributions/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'DELETE_CONTRIBUTION_PUBLISH',
                id: id,
            });
            swal({
                title: 'Success',
                text: 'Contribution deleted successfully',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handleUpdateContribution = (id, contribtuionUpdate) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://35.224.120.132/contributions/${id}`,
                method: 'PUT',
                data: contribtuionUpdate,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            swal({
                title: 'Success',
                text: 'Contribution updated successfully',
                icon: 'success',
                button: 'OK',
            });
            dispatch({
                type: 'UPDATE_CONTRIBUTION',
                contribution: result.data,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handlePublishContribution = (id, contribution) => {
    return async (dispatch) => {
        try {
            await Axios({
                url: `https://35.224.120.132/contributions/${id}/publish`,
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            swal({
                title: 'Success',
                text: 'Contribution published successfully',
                icon: 'success',
                button: 'OK',
            });
            dispatch({
                type: 'PUBLISH_CONTRIBUTION',
                contribution: contribution,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handleSendComment = (id, comment) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://35.224.120.132/contributions/${id}/comments`,
                method: 'POST',
                data: comment,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'ADD_COMMENT',
                contributionComment: result.data,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const getContributionComment = (id) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://35.224.120.132/contributions/${id}/comments`,
                method: 'GET',
            });
            dispatch({
                type: 'GET_CONTRIBUTION_COMMENT',
                contribution: result.data,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
export const handleDownloadContribution = (contribution) => {
    return async (dispatch) => {
        try {
            await Axios({
                url: 'https://35.224.120.132/contributions/published/download',
                method: 'POST',
                data: contribution,
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            swal({
                title: 'Success',
                text: 'Please check your email',
                icon: 'success',
                button: 'OK',
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};

export const fetchReport = () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://35.224.120.132/report',
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
                },
            });
            dispatch({
                type: 'GET_REPORT',
                statistic: result.data,
            });
        } catch (err) {
            swal({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                button: 'OK',
            });
        }
    };
};
