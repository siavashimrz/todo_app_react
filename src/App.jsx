import { useState } from 'react';
import TextInput from './TextInput';
import ToDoListItems from './ToDoListItems';

function App() {
  const [listItem, setListItem] = useState(['Buy milk', 'Call Joe']);
  const listLength = listItem.length;
  const appHeight = listLength>9 ? ((listLength+7)*37) : 16*37;

  function handleAdd(item) {
    setListItem((prev) => [...prev, item]);
  }

  function handleDelete(itemIndex) {
    const items = [...listItem];
    items.splice(itemIndex, 1);
    setListItem(items);
  }

  return (
    <div className="todo-app" style={{height:`${appHeight}px`}}>
      <h1 className="title">To-Do List</h1>
      <TextInput onAdd={handleAdd} />
      <ToDoListItems toDoList={listItem} onDelete={handleDelete} />
    </div>
  );
}

// let toDoList = ['joe biden', 'jush'];

export default App;
