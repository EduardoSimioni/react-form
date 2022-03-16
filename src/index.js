import React from 'react'
import ReactDOM from 'react-dom'

import MyRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <MyRoutes />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
