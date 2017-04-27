import routes from './routes.jsx'
import React from 'react'
import { render } from 'react-dom'

document.addEventListener('DOMContentLoaded', (event) => {
  render(
    routes,
    document.getElementById('app')
  );
});
