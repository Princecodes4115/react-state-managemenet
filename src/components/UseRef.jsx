/* eslint-disable no-undef */
import { useRef, useEffect, useState } from 'react';

const UseRef = () => {
  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: 'John' },
    { id: idRef.current++, name: 'Jane' }
  ]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function addName() {
    setNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current.value
      }
    ]);
    inputRef.current.value = '';
  }

  return (
    <div>
      <div>
        {names.length === 0 ? (
          <div>No names to display</div>
        ) : (
          names.map((name) => (
            <div key={name.id}>
              {name.id} - {name.name}
            </div>
          ))
        )}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={addName}>Add</button>
    </div>
  );
};

export default UseRef;
