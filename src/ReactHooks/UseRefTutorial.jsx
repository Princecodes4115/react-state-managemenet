import  {useRef} from 'react'

const UseRefTutorial = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        // inputRef.current.value = '';
        // console.log(inputRef.current.value);
 }

  return (
      <div>
          <input type='text' placeholder='Ex...' ref={inputRef}/>
      <button onClick={onClick}>Change Value</button>
    </div>
  )
}

export default UseRefTutorial
