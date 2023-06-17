/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const  StopWatch = () => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
}, [])
  return (
    <div>
      Time: {time}
    </div>
  )
}

const UseEffect = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
 fetch("../public/names.json")
  .then((response) => response.json())
  .then((data) => setName(data));
  }, [])

  // const [selectedName, setSelectedName] = useState(null)
  const [selectedNameDetails, setSelectedNameDetails] = useState(null)

  
  // useEffect(() => {
  //   if (selectedName) {
  //     fetch(`/${selectedName}.json`)
  //       .then((response) => response.json())
  //       .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  const onSelectedNameChange = (name) => {
fetch(`/${name}.json`)
  .then((response) => response.json())
  .then((data) => setSelectedNameDetails(data));
  }
  
  return (
    <div>
      <StopWatch />
      <div>
        {name.map((name) => (
          <button key={name} onClick={() => onSelectedNameChange(name)}>
            {name}
          </button>
        ))}
      </div>
      {JSON.stringify(selectedNameDetails)}
    </div>
  );
}

export default UseEffect
