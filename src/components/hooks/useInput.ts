import { useState } from "react";

type ReturnType = [
  string,
  () => void,
  { value: string; onChange: (e: any) => void }
];

const useInput = (
  initialState: string
): ReturnType => {
  const [value, setValue] = useState(initialState);

  function reset() {
    setValue(initialState);
  }

  const bind = {
    value,
    onChange: (e: any) => setValue(e.target.value),
  };

  return [value, reset, bind];
};

export default useInput;


