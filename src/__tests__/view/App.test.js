import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../view/components/App'

import rootReducer from '../../model/reducers/root'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer
)

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div)
    ReactDOM.unmountComponentAtNode(div)
  })

})

