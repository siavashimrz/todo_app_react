import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import ToDoListItems from "./ToDoListItems";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [listItem, setListItem] = useState([
    {
      id: "f3c24a82-aeba-49e0-9679-ac34c2dc66de",
      text: "Buy milk",
      isDone: false,
      isPin: false,
    },
    {
      id: "3fd35dcc-b35c-4a63-a8fc-01f98302ef0b",
      text: "Call Joe",
      isDone: false,
      isPin: false,
    },
  ]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const listLength = listItem.length;
  const appHeight = listLength > 9 ? (listLength + 7) * 37 : 16 * 37;

  useEffect(() => {
    if (openMenuId === null) {
      return;
    }

    function handleClickAway() {
      setOpenMenuId(null);
    }

    document.addEventListener("click", handleClickAway);

    return () => document.removeEventListener("click", handleClickAway);
  }, [openMenuId]);

  function handleAdd(inputText) {
    const newItem = {
      id: uuidv4(),
      text: inputText,
      isDone: false,
      isPin: false,
    };
    setListItem((prev) => [...prev, newItem]);
  }

  function handleDeleteClick(itemId) {
    // console.log("hey on deleteclick");
    setDeleteConfirmId(itemId);
    setOpenMenuId(null);
  }

  function handleDelete(itemId) {
    setListItem((prev) => prev.filter((item) => item.id !== itemId));
    setOpenMenuId(null);
    setDeleteConfirmId(null);
  }

  function handleIsDone(itemId) {
    if (openMenuId !== null) return;
    setListItem((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  }

  function handleIsPin(itemId) {
    // console.log("pinned!");
    setListItem((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, isPin: !item.isPin } : item,
      ),
    );
    setOpenMenuId(null);
  }

  function handleEdit(itemId) {
    // console.log(itemId);
    setEditingItemId(itemId);
    setOpenMenuId(null);
  }

  function handleItemTextChange(itemId, newText) {
    // console.log("chnged! ", newText, itemId);
    setListItem((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, text: newText } : item,
      ),
    );
  }

  return (
    <div className="todo-app" style={{ height: `${appHeight}px` }}>
      <h1 className="title">To-Do List</h1>
      <TextInput onAdd={handleAdd} />
      <ToDoListItems
        toDoList={listItem}
        onDelete={handleDeleteClick}
        onIsDone={handleIsDone}
        onIsPin={handleIsPin}
        onEdit={handleEdit}
        editingItemId={editingItemId}
        onItemTextChange={handleItemTextChange}
        openMenuId={openMenuId}
        onOpenMenu={setOpenMenuId}
      />
      {deleteConfirmId !== null && (
        <div className="delete-overlay">
          <div className="delete-confirm">
            <p>
              Are you sure you want to delete "
              {listItem.find((item) => item.id === deleteConfirmId)?.text}
              "?
            </p>
            <div className="delete-confirm-buttons">
              <button
                className="delete-btn"
                onClick={() => handleDelete(deleteConfirmId)}
              >
                Delete
              </button>
              <button
                className="cancel-btn"
                onClick={() => setDeleteConfirmId(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
