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

function ToDoListItem({ showPins, toDoList, onDelete, onIsDone, onIsPin }){
  const filteredList = toDoList.filter(item => item.isPin === showPins);
  const pinStyle = {
    fontWeight: "900",
    color: "red"
  };

  return (
    <>
      {filteredList.map((item) => (
        <li key={item.id} onClick={()=> onIsDone(item.id)} style={showPins ? pinStyle : null}>
        <div className="li-container">
            {item.isDone ? <del>{item.text}</del> : item.text}
            <Button onClickEvent={() => onDelete(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </Button>
            <Button onClickEvent={() => onIsPin(item.id)}>
              {showPins
              ? <i class="fa-solid fa-thumbtack-slash"></i>
              : <i className="fa-solid fa-thumbtack"></i>}
            </Button>
        </div>
      </li>
      ))}
    </>
  );
}

export default function ToDoListItems({ toDoList, onDelete, onIsDone, onIsPin }) {
  return (
    <ul>
      <ToDoListItem showPins={true} toDoList={toDoList} onDelete={onDelete} onIsDone={onIsDone} onIsPin={onIsPin} />
      
      <ToDoListItem showPins={false} toDoList={toDoList} onDelete={onDelete} onIsDone={onIsDone} onIsPin={onIsPin} />
      
    </ul>
  );
}