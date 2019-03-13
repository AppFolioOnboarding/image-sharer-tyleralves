import React from 'react'
import ReactDOM from 'react-dom'

import Landing from './scenes/Landing'
import './styles/index'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Landing name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
});
