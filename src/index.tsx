import React from 'react'
import ReactDOM from 'react-dom/client' // Используем 'react-dom/client'
import App from '../src/Components/App/App'
import './index.scss'
import './reset.css'
import { Provider } from 'react-redux'
import store from './store/store'


const root = ReactDOM.createRoot(document.getElementById('root')!) 
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
