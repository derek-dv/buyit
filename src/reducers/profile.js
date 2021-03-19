import * as types from "../actions/profile";

export const profile = (state={loading: true}, action) => {
  switch (action.type) {
    case types.GET_PROFILE:
      return { loading: true}
    case types.GET_PROFILE_SUCCESS:
      return {profile: action.payload, loading: false}
    case types.GET_PROFILE_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}
