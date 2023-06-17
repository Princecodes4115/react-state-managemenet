/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppContext } from "./UseContextTutorial"

const User = () => {
    const {userName} = useContext(AppContext)
  return (
    <div>
      <h1>User: {userName}</h1>
    </div>
  )
}

export default User
