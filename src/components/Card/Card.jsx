
import "./Card.css"




export default function Card({h1,p,img}){
    return (
    <figcaption className="c-figcapt">
    <h1>{h1}</h1>
    <p>{p}</p>
    <img className="c-card-img" src={img} alt=""></img>
    </figcaption>
    )  
}

