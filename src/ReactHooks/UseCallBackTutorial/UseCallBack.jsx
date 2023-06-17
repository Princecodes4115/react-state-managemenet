/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import Child from './Child'
import { useCallback } from 'react';

const UseCallBack = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ data, setData ] = useState("Yo!, am becoming a better programmer now")
    
    const returnComment = useCallback((name) => {
        return data + name
    }, [data])

  return (
    <div>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <p>was toggled</p>}
    </div>
  );
}

export default UseCallBack
