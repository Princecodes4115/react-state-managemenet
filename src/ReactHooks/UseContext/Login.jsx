/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AppContext } from "./UseContextTutorial";


const Login = () => {
    const {setUserName} = useContext(AppContext)
  return (
    <div>
          <input type="text" onChange={(event) => {
              setUserName(event.target.value)
      }} />
    </div>
  )
}

export default Login
