import { render } from 'preact'
import './index.css'
import App from './App'

const root = document.getElementById('root')
if (!root) throw new Error('Missing CV root element')

render(<App />, root)
