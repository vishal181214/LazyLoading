import * as apiUtil from '../util/session';
import { receiveErrors } from "./error";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receive_current_user = user => ({
    type:RECEIVE_CURRENT_USER,
    user
});

const logout_current_user = () =>({
    type: LOGOUT_CURRENT_USER
})

export const login = user => async dispatch => {
    const response = await apiUtil.login(user);
    const data = await response.json();
    if (response.ok) {
        return dispatch(receiveCurrentUser(data));
      }
      return dispatch(receiveErrors(data));
    };
    
    // if (response.ok) {
    //     return dispatch(receiveCurrentUser(data));
    //   }
    //   return dispatch(receiveErrors(data));
    // }
    
    if (response.ok) {
        return dispatch(logoutCurrentUser());
      }
      return dispatch(receiveErrors(data));
    };

  