/* eslint-disable no-unused-vars */
import React, {useReducer, useState} from 'react'


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "TOGGLESHOWTEXT":
            return { count: state.count + 1, showText: !state.showText };
        default:
            return state;
    }

}
const UseReducerTutorial = () => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        showText: true,
})
  return (
    <div>
          {state.count}
          <button onClick={() => {
              dispatch({ type: "INCREMENT"});
              dispatch({ type: "TOGGLESHOWTEXT" });
          }}>Click here</button>
          {state.showText && <p>showing text</p>}
    </div>
  )
}

export default UseReducerTutorial
