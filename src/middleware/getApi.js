
const BASE_URL = process.env.REACT_APP_BASE_URL

function callApi(endpoint) {
    return fetch(BASE_URL + endpoint)
        .then(response =>
                response.json().then(data => (
                { data, response }))
        ).then(({ data, response }) => {
            return data
        }).catch(err => 0);
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
    const callAPI = action[CALL_API];
    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
        return next(action);
    }
    let { endpoint, types } = callAPI;
    const [ requestType, successType, errorType ] = types;

    return (next({type:requestType}),
        callApi(endpoint).then(
        response =>
            next({
                response,
                type: successType
            }),
        error => next({
            error: error || 'There was an error.',
            type: errorType
        })
    ))
}
