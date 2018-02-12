import markTableReducer from './stores/markTable'

const rootReducer = (state, action) => {
  console.log(action)
  return markTableReducer(state, action)
}


export default rootReducer