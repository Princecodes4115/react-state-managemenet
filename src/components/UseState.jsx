import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["John", "Doe", "Smith"]);
  const [name, setName] = useState(() => "Jack") // useState can also take function as initial value

 const addName = () => {
   setList([...list, name])
   setName('')
  }

  return (
    <div>
      <ul>
        {list.map((name) => 
          <li key={name}>{name}</li>
        )}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>
          Add Name
      </button>
    </div>
  );
}

const Counter = () => {
  const [count, setCount] = useState(30);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
};

function UseState() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default UseState;
