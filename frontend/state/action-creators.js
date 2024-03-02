import axios from "axios";

import {
  INPUT_CHANGE,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  SET_QUIZ_INTO_STATE,
  RESET_FORM,
} from "./action-types";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(index) { 
  return {
    type: MOVE_CLOCKWISE,
    payload: index
  }
}

export function moveCounterClockwise(index) {
  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: index
  }
}

export function selectAnswer(answer_id) { 
  return {
    type: SET_SELECTED_ANSWER ,
    payload: answer_id
  }
}

export function setMessage() { }

export function setQuiz() { 
  return {
    type: SET_QUIZ_INTO_STATE
  }
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz(props) {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch({type: SET_QUIZ_INTO_STATE});
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
      .then( ({data}) => {
        // console.log(data)
        dispatch({type: SET_QUIZ_INTO_STATE, payload: data})
      })
      .catch(err => err.message)
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
