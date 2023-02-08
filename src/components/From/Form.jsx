import { useState } from "react";

const initialValue = {
    title: "",
    description: "",
    imgUrl: ""
}
export default function Form(onSubmit){
    const [data, setData] = useState(initialValue);
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        onSubmit(data);
    }
 const changeValue = (e) => {
     setData({...data, [e.target.name]: e.target.value});
 }
    return <form onSubmit={submit}>
    <label>
    Title
    <input type="text" 
    name="title"
    value={data.title} 
    onChange={changeValue}/>
    </label>
    <label>
    Desciption
    <input type="text" 
    name="description"
    value={data.description} 
    onChange={changeValue}/>
    </label>
    <label>
    Img Url
    <input type="text" 
    name="imgUrl"
    value={data.imgUrl} 
    onChange={changeValue}/>
    </label>

    <button>Enviar</button>

    </form>
}


