/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import { useImperativeHandle, forwardRef, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button onClick={() => ref.current.alterToggle()}>
        Button from Child
      </button>
      {toggle && <span>toggled</span>}
    </div>
  );
});

export default Button;
