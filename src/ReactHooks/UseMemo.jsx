/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");
    return longestName;
    };
    
    const getLongestName = useMemo(() => findLongestName(data), [data])

  return (
    <div>
      {getLongestName}
      <div>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Toggle
        </button>
      </div>
      {toggle && <p>toggled</p>}
    </div>
  );
};

export default UseMemo;
