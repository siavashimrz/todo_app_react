import { useState } from 'react';
function TextInput({ onAdd }) {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAdd(inputText);
    setInputText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        id="input"
        onChange={handleChange}
        value={inputText}
      />
      <button id="add-btn">Add ⮟</button>
    </form>
  );
}

export default TextInput;
