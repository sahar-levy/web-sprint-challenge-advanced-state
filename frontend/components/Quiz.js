import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'


function Quiz(props) {
  const { quiz, selectAnswer, selectedAnswer, fetchQuiz, postAnswer } = props;

  useEffect(() => {
    !quiz && fetchQuiz();
  }, [])

  const onSubmit = () => {
    postAnswer()
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${selectedAnswer === quiz.answers[0].answer_id ? ' selected' : ''}`} onClick={() => {selectAnswer(quiz.answers[0].answer_id)}}>
                {quiz.answers[0].text}
                <button>
                  {selectedAnswer === quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={`answer ${selectedAnswer === quiz.answers[1].answer_id ? ' selected' : ''}`} onClick={() => {selectAnswer(quiz.answers[1].answer_id)}}>
                {quiz.answers[1].text}
                <button>
                  {selectedAnswer === quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button onClick={onSubmit} id="submitAnswerBtn" disabled={selectedAnswer ? false : true}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, actionCreators)(Quiz);