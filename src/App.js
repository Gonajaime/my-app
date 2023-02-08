import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord/HelloWorld';
import HeaderSays from './components/Header/Header';
import FooterSays from './components/Footer/Footer';
import Btn from './components/Btn/Btn';
import Gallery from './components/Gallery/Gallery';
import ClickBtn from './components/ClickBtn/ClickBtn';
import Form from './components/From/Form';
import List from './components/List/List';
import Counter from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';
import TodoFrom from './components/TodoForm/TodoForm';
import { useState } from 'react';
import CounterEffect from './components/CounterEffect/CounterEffect';


const lista = ["Ensalada", "croquetas", "Fabada"];


function App() {

  const [todoList, setTodoList] = useState([{name: "aprende ostias", isDone: false}])


const addNewItemList = (data) => {
  setTodoList([...todoList, data])
}

const changeIsDone = (isDone, index) => {
  const copyList = [...todoList];

  // copyList
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HeaderSays>
        </HeaderSays>
        <CounterEffect></CounterEffect>
        <Form></Form>
      <List list={lista}></List>
        <ClickBtn></ClickBtn>
        <HelloWord></HelloWord>
        <Counter></Counter>
        <Gallery></Gallery>

        <Btn text="Guardar" pedro="Hello"></Btn>
        <Btn text="Pinchar" pedro="Hello"></Btn>
        <Btn text="Saludar" pedro="Hello" ></Btn>

        

        <TodoFrom onSubmit={addNewItemList}></TodoFrom>
        <TodoList onChangeCheck={changeIsDone} list={todoList}></TodoList>
        
        <FooterSays>

        </FooterSays>
      </header>
    </div>
  );
}

export default App;
