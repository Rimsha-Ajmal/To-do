import React, {useState} from "react";

function InputArea(props) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
      }

    return (
        <div>
        <input onChange={handleChange} type="text" value={inputValue} />
          <button onClick={()=>{
            {props.displayItems(inputValue)};
            setInputValue("");
          }}>
            <span>Add</span>
          </button>
          </div>
    )
}

export default InputArea;