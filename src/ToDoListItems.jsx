function ToDoListItems({ toDoList, onDelete }) {
  return (
    <ul>
      {toDoList.map((item, index) => (
        <li key={index} onClick={() => onDelete(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ToDoListItems;
