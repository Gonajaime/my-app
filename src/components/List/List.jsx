export default function List({list}){
    return <ul>
        {list.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
}