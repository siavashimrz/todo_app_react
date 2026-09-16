export default function EditText({ item, editingItemId, onItemTextChange }) {
  // const [itemInputText, setItemInputText] = useState(item.text);
  const isEditing = item.id === editingItemId;
  return (
    <>
      <input
        type="text"
        // name="inputs"
        // id="inputs"
        style={{
          display: isEditing ? "block" : "none",
        }}
        onChange={(e) => {
          // setItemInputText(e.target.value);
          onItemTextChange(item.id, e.target.value);
          // console.log(itemInputText);
        }}
        value={item.text}
      />
    </>
  );
}
