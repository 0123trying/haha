import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import Counter from './components/Counter.jsx'
import Todo from './components/Todo.jsx'
import Counterz from './components/Counterz.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  
   <Route path='/' element={<App></App>}></Route>
    <Route path='/counter' element={<Counter></Counter>}></Route>
    <Route path='/todo' element={<Todo></Todo>}></Route>
    <Route path='/counterz'element={<Counterz></Counterz>}></Route>
 
  </Routes>
  
  </BrowserRouter>
  
 
)
