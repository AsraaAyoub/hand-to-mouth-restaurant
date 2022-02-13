import React from "react";

const InputFilter = ({ inputFilter, setInputFilter }) => {
  console.log(inputFilter);
  return (
    <fieldset>
      <legend> Search </legend>
      <input
        style={{ width: 200, cursor: "pointer" }}
        type="text"
        name="inputFilter"
        value={inputFilter}
        onChange={(event) => setInputFilter(event.target.value)}
      />
    </fieldset>
  );
};

export default InputFilter;
