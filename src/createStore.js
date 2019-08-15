export default function createStore(reducer) {
  // add your code here
  let state;
  const dispatch = action => {
    state = reducer(state, action);
    render();
  };
  const getState = () => state;

  dispatch({ type: '@@INIT' })

  return {
    getState,
    dispatch
  };
}

function render() {
  const container = document.getElementById("container");
}
