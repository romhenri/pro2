import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import Quiz from './components/Quiz'
import Question from './components/Question'

function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='quiz'>
            <Route index element={<QuizPage/>}/>
            
            <Route path='general1' 
              element={<Quiz title="General 1" data="general1"/>}/>

            <Route path='*' element={<Quiz/>}>
            </Route>
          </Route>
          <Route path='about' element={<main>
            <section>
              <h2>AboutPage</h2>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod sed provident illo voluptatem cum exercitationem laborum nesciunt quaerat eveniet. Architecto, ullam neque. Quas nostrum at, laudantium est necessitatibus consequatur.</p>
            </section>
        </main>}/>
          <Route path='*' element={"404"}/>
        </Routes>
        <Footer/>

      </Router>

    </>
  )
}

export default App