import { useState } from "react";

export const useFormInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = ({ target: { value } }) => setValue(value);

  const clearValue = () => setValue("");

  return {
    inputProps: {
      value,
      onChange,
    },
    clearValue,
  };
};
