import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//custom written code that is to be rendered
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click to visit goolge.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />

)
