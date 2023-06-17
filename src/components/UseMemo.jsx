/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useMemo, useCallback } from "react";

function SortedList({list, sortFunc}) {
    const sortedList = useMemo(() => {
        console.log("runing sort");
        return [...list].sort(sortFunc);
    }, [list, sortFunc]);
    return (
        <div>
            {sortedList.join(", ")}
        </div>
    )
}

const UseMemo = () => {
    const [numbers] = useState([10, 20, 30])
    const [names] = useState(["John", "Doe", "Allen", "Moses"])
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0);
    
    const total = useMemo(() => numbers.reduce((number, n) => number + n, 0), [numbers])

    const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []) ;


    const subTotal = count1 + count2;
    return (
      <div >
        <div>Total: {total}</div>
        <div>Names: {names.join(", ")}</div>
       <SortedList list={names} sortFunc={sortFunc}/>
        <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
        <div>SubTotal : {subTotal}</div>
      </div>
    );
}
 
export default UseMemo;