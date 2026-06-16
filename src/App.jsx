import { useState } from 'react';
import TextInput from './TextInput';
import ToDoListItems from './ToDoListItems';
import {v4 as uuidv4} from "uuid";

function App() {
  const [listItem, setListItem] = useState([
      {
        id: "f3c24a82-aeba-49e0-9679-ac34c2dc66de",
        text: 'Buy milk',
        isDone: false
      },
      {
        id: "3fd35dcc-b35c-4a63-a8fc-01f98302ef0b",
        text: 'Call Joe',
        isDone: false
      }
    ]);
  const listLength = listItem.length;
  const appHeight = listLength>9 ? ((listLength+7)*37) : 16*37;

  function handleAdd(inputText) {
    const newItem = {
      id: uuidv4(),
      text: inputText,
      isDone: false
    }
    setListItem((prev) => [...prev, newItem]);
  }

  function handleDelete(itemId) {
    const items = [...listItem];
    const itemIndex = items.findIndex(item => item.id === itemId);
    items.splice(itemIndex, 1);
    setListItem(items);
  }

  function handleIsDone(itemId){
    const items = [...listItem];
    const itemToChange = items.find(item => item.id === itemId);
    itemToChange.isDone = !itemToChange.isDone;
    setListItem(items);
  }

  return (
    <div className="todo-app" style={{height:`${appHeight}px`}}>
      <h1 className="title">To-Do List</h1>
      <TextInput onAdd={handleAdd} />
      <ToDoListItems toDoList={listItem} onDelete={handleDelete} onIsDone={handleIsDone} />
    </div>
  );
}

// let toDoList = ['joe biden', 'jush'];

export default App;
