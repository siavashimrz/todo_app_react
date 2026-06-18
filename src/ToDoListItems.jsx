function Button({children, onClickEvent}){
  return (
    <button onClick={(e) => {
      e.stopPropagation();
      onClickEvent();
      }
    }>
      {children}
    </button>
  );
}

function ToDoListItems({ toDoList, onDelete, onIsDone, onIsPin }) {
  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id} onClick={()=> onIsDone(item.id)}>
        <div className="li-container">
            {item.isDone ? <del>{item.text}</del> : item.text}
            <Button onClickEvent={() => onDelete(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </Button>
            <Button onClickEvent={() => onIsPin(item.id)}>
              <i className="fa-solid fa-thumbtack"></i>
            </Button>
        </div>
      </li>
      ))}
    </ul>
  );
}

export default ToDoListItems;
