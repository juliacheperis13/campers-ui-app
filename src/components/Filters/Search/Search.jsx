import clsx from "clsx";
import { useState } from "react";

const Search = ({ title, handleChange, placeholder, icon }) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);

    handleChange(event.target.value);
  }

  return (
    <div className="inputContainer">
      <label className="inputLabel">{title}</label>
      <div className="inputWrapper">
        <svg className={clsx(["inputIcon", inputValue && "filled"])}>
          <use href={`/icons.svg#${icon}`}></use>
        </svg>
        <input
          placeholder={placeholder}
          className="input"
          type="text"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
