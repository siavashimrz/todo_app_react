const SVGComponent = ({onClick}) => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // {...props}
  >
    <title>{"trashcan-filled"}</title>
    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"
    onClick={(e)=>{
      e.stopPropagation();
      onClick();
    }}>
      <g
        id="trashcan"
        fill="#000000"
        transform="translate(64.000000, 42.666667)"
      >
        <path
          d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
);

function ToDoListItems({ toDoList, onDelete, onIsDone }) {
  return (
    <ul>
      {toDoList.map((item) => (
        <li key={item.id} onClick={()=> onIsDone(item.id)}>
        <div className="li-container">
            {item.isDone ? <del>{item.text}</del> : item.text}
            <SVGComponent onClick={() => onDelete(item.id)} />
        </div>
      </li>
      ))}
    </ul>
  );
}

export default ToDoListItems;
