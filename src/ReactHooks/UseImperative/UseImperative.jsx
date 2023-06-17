import {useRef} from 'react'
import Button from './Button'

const UseImperative = () => {
  const buttonRef = useRef()

  return (
    <div>
      <button onClick={() => {
        buttonRef.current.alterToggle()
      }}>Button from parent</button>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default UseImperative
