/* eslint-disable react/prop-types */

import { useEffect } from 'react'

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("received data");
  }, [returnComment]);
  return <div>{returnComment("Moseley")}</div>;
};

export default Child
