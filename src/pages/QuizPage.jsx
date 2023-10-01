import React from 'react'
import { useNavigate } from 'react-router-dom'
import manThinking from '../assets/man-thinking-bro.png'

const QuizPage = () => {
  const navigate = useNavigate()

  const general1 = () => {navigate("/quiz/general1")}
  const general2 = () => {navigate("/quiz/general2")}
  const general3 = () => {navigate("/quiz/general3")}
  const history1 = () => {navigate("/quiz/history1")}
  const programming1 = () => {navigate("/quiz/programming1")}
  const programming2 = () => {navigate("/quiz/programming2")}
  const javascript1 = () => {navigate("/quiz/javascript1")}
  const javascript2 = () => {navigate("/quiz/javascript2")}
  const javascript3 = () => {navigate("/quiz/javascript3")}
  const web1 = () => {navigate("/quiz/web1")}
  const linux1 = () => {navigate("/quiz/linux1")}
  const python1 = () => {navigate("/quiz/python1")}
  
  return (
    <main className='quizPage'>
      <section className='quizzes'>
        <div className='container'>
          <div>
            <h2>Quizzes:</h2>
            <p>MindQuiz offers a wide array of quizzes for all interests. From challenging trivia to engaging puzzles, there's something for everyone. Whether you're into history, science, or pop culture, we've got quizzes to both entertain and challenge you. Explore a world of topics designed to stimulate your mind. Join us at MindQuiz!</p>
          </div>
          <div>
            <img src={manThinking} alt="" />
          </div>
        </div>
      </section>

        <div className="container">
          <div className="quizCard" onClick={general1}>
            <h3>General 1</h3>
            <p>Easy general knowledge questions.</p>
          </div>

          <div className="quizCard" onClick={general2}>
            <h3>General 2</h3>
            <p>Easy general knowledge questions.</p>
          </div>

          <div className="quizCard" onClick={general3}>
            <h3>General 3</h3>
            <p>Easy general knowledge questions.</p>
          </div>

          <div className="quizCard" onClick={history1}>
            <h3>History 1</h3>
            <p>Easy history knowledge questions.</p>
          </div>

          <div className="quizCard" onClick={programming1}>
            <h3>Programming 1</h3>
            <p>Easy general programming questions.</p>
          </div>

          <div className="quizCard" onClick={programming2}>
            <h3>Programming 2</h3>
            <p>Intermediate-level general programming questions.</p>
          </div>

          <div className="quizCard" onClick={javascript1}>
            <h3>JavaScript 1</h3>
            <p>Easy JavaScript questions.</p>
          </div>

          <div className="quizCard" onClick={javascript2}>
            <h3>JavaScript 2</h3>
            <p>Easy JavaScript questions.</p>
          </div>

          <div className="quizCard" onClick={javascript3}>
            <h3>JavaScript 3</h3>
            <p>Intermediate-level JavaScript questions.</p>
          </div>

          <div className="quizCard" onClick={web1}>
            <h3>Web 1</h3>
            <p>Easy web questions.</p>
          </div>

          <div className="quizCard" onClick={linux1}>
            <h3>Linux 1</h3>
            <p>Easy Linux questions.</p>
          </div>

          <div className="quizCard" onClick={python1}>
            <h3>Python 1</h3>
            <p>Easy Python questions.</p>
          </div>
        </div>
    </main>
  )
}

export default QuizPage
