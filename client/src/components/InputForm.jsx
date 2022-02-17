import React from "react";

export default function InputForm({onSubmit, buttonText, placeHolder, value}) {

  function handleSubmit(event){
    event.preventDefault();
    const text = event.target.input.value;
    onSubmit(text);
    event.target.input.value = ''

  }
    return (
        <form className="center-all" onSubmit={handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder={placeHolder}
            defaultValue={value}
          />
          <button>{buttonText}</button>
        </form>
    )
}