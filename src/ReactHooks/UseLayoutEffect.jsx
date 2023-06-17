import {useEffect, useLayoutEffect, useRef} from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    })

    useEffect(() => {
        inputRef.current.value = 'HELLO WORLD';
    })
  return (
    <div className='App'>
      <input type='text' value="PRADO" ref={inputRef}  style={{width:"30rem", height:"2rem"}}/>
    </div>
  )
}

export default UseLayoutEffect
