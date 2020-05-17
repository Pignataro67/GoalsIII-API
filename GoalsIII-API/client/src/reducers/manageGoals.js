export default function goalsReducer(state = {
  goals: []}, 
  action){
  switch(action.type){
    case 'ADD_GOAL':
      console.log('adding', action.goal )
    case 'LOADING_GOALS':
      console.log("loading goals now")
      return {...state, loading: [...state.loading, true]}
    case 'FETCH_GOALS':
      console.log("fetch goals")
      return {loading: false, goals: action.payload}
    return [
        ...state,
        action.goal]
    default:
      console.log("hit default case in reducer")
      return state;
  }
}