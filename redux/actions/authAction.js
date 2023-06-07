
export const LOGIN_USER_AUTH_SUCCESS = 'LOGIN_USER_AUTH_SUCCESS';

export const UserAuth = (authData) => {
    var result = false;
    return async dispatch => {
            dispatch({
                type: LOGIN_USER_AUTH_SUCCESS,
                payload: authData
            });
            result = true;
        return result;
    }
}


