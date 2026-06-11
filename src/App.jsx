import { useState } from 'react';
import TextInput from './TextInput';
import ToDoListItems from './ToDoListItems';

function App() {
  const [listItem, setListItem] = useState(['Buy milk', 'Call Joe']);

  function handleAdd(item) {
    setListItem((prev) => [...prev, item]);
  }

  function handleDelete(itemIndex) {
    const items = [...listItem];
    items.splice(itemIndex, 1);
    setListItem(items);
  }

  return (
    <div className="todo-app">
      <h1 className="title">To-Do List</h1>
      <TextInput onAdd={handleAdd} />
      <ToDoListItems toDoList={listItem} onDelete={handleDelete} />
    </div>
  );
}

// let toDoList = ['joe biden', 'jush'];

export default App;
