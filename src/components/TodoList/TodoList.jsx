import "./TodoList.css"


export default function TodoList({list}){
    return (
    <ul>
        {list.map((item, index) => (
        <li key={index}>
        {/* <input type="checkbox" checked={item.isDone} onChange={(e) => onChangeCheck(e.value.checked, index)}/> */}
        {/* <span className= {item.isDone ? /> */}
        </li>
        ))}
    </ul>
    );
}