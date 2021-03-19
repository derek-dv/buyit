import Axios from "axios";
import * as types from "./profile";

export const getProfile = (id) => dispatch => {
  if(id===undefined) return dispatch({type: types.GET_PROFILE_FAIL, payload: "Not logged in!!"})
  dispatch({type: types.GET_PROFILE})
  Axios.get("/api/profile/" + id)
    .then(res=>{
      dispatch({type: types.GET_PROFILE_SUCCESS, payload: res.data})
    }).catch(err => {
      dispatch({type: types.GET_PROFILE_FAIL, payload: err.response})
    })
}
