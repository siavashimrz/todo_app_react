import ToDoListItem from "./ToDoListItem";

export default function ToDoListItems({
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
  return (
    <ul>
      {[true, false].map((isShow) => (
        <ToDoListItem
          key={isShow.toString()}
          showPins={isShow}
          toDoList={toDoList}
          onDelete={onDelete}
          onIsDone={onIsDone}
          onIsPin={onIsPin}
          onEdit={onEdit}
          editingItemId={editingItemId}
          onItemTextChange={onItemTextChange}
          openMenuId={openMenuId}
          onOpenMenu={onOpenMenu}
        />
      ))}
    </ul>
  );
}
