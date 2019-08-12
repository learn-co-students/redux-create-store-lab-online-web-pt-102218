export default function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
  }
  dispatch({type: "@@init"})

  function getState(){
    return state;
  }
  return {getState: getState, dispatch: dispatch}
}

function render() {
  const container = document.getElementById('container');
}
