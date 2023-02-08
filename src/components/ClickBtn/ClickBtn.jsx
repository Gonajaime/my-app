export default function ClickBtn(){
    const clickMe = (e) =>{
        console.log("olé olá" + e);
    }

    return <button onClick={clickMe}>Click me</button>
}