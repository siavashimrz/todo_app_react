import Button from "./Button";
import EditText from "./EditText";

export default function ToDoListItem({
  showPins,
  toDoList,
  onDelete,
  onIsDone,
  onIsPin,
  onEdit,
  editingItemId,
  onItemTextChange,
  openMenuId,
  onOpenMenu,
}) {
  const filteredList = toDoList.filter((item) => item.isPin === showPins);
  const pinStyle = {
    fontWeight: "900",
    color: "red",
  };

  return (
    <>
      {filteredList.map((item) => (
        <li
          key={item.id}
          onClick={() => onIsDone(item.id)}
          style={showPins ? pinStyle : null}
        >
          <div className="li-container">
            <div className="li-text">
              {item.isDone ? <del>{item.text}</del> : item.text}
              <EditText
                item={item}
                editingItemId={editingItemId}
                onItemTextChange={onItemTextChange}
              />
            </div>
            {openMenuId !== item.id && (
              <Button onClickEvent={() => onOpenMenu(item.id)}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </Button>
            )}
            {openMenuId === item.id && (
              <>
                <Button onClickEvent={() => onOpenMenu(null)}>
                  <i className="fa-solid fa-xmark"></i>
                </Button>
                <Button onClickEvent={() => onDelete(item.id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
                <Button onClickEvent={() => onIsPin(item.id)}>
                  {showPins ? (
                    <i class="fa-solid fa-thumbtack-slash"></i>
                  ) : (
                    <i className="fa-solid fa-thumbtack"></i>
                  )}
                </Button>
                <Button onClickEvent={() => onEdit(item.id)}>
                  <i className="fa-solid fa-pen"></i>
                </Button>
              </>
              //   <div className="options-menu">
              //     <button>Delete</button>
              //     <button>Pin</button>
              //     <button>Edit</button>
              //     <button onClick={() => onOpenMenu(null)}>Close</button>
              //   </div>
            )}
          </div>
        </li>
      ))}
    </>
  );
}
