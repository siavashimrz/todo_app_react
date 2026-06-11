import { useState } from 'react';
function TextInput({ onAdd }) {
  const [inputText, setInputText] = useState('');
  const [showEmptyError, setShowEmptyError] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setInputText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(inputText.length > 0) {
      onAdd(inputText);
      setInputText('');
      setShowEmptyError(false);
    } 
    else {
      setShowEmptyError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        id="input"
        onChange={handleChange}
        value={inputText}
        placeholder={showEmptyError ? "Enter something here!" : ""}
      />
      <button id="add-btn">Add ⮟</button>
    </form>
  );
}

export default TextInput;
