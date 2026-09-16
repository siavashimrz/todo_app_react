export default function Button({ children, onClickEvent }) {
  return (
    <button
      className="round-btn"
      onClick={(e) => {
        e.stopPropagation();
        onClickEvent();
      }}
    >
      {children}
    </button>
  );
}
