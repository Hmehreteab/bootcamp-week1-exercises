import React, { useState} from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import { Container, Text } from "./styles"


const Header = () => {
    // use state stuff

    const [toDos, setTodos] = useState([])
    const [toDo, setTodo] = useState("");
    console.log(toDo, "toDo");
    // console.log(toDos)

    // each todo an id
    // if it's particular id, filter out 
    // check for id, not fetching those to be deleted
    // and then set to do
    return (
        <Container>
            <Text>Welcome to your Personal To-Do List!</Text>
            <Text>Track your task(s) by adding and removing them below :D</Text>
            <form>
                {/* <label> */}
                    <input type="text" value={toDo} onChange={e => setTodo(e.target.value)}/>
                    <button type="button" onClick={() => setTodos([...toDos, {toDo}])}>
                        Add Task
                    </button>
                    {/* {console.log(toDos, "toDos")} */}
                {/* </label> */}
            </form>
            <ul>
                {
                toDos.map(({toDo}) => 
                <li><Text>{toDo}</Text></li>) // button next to text here, here also functions
                <button type="button" onClick={() => setTodos([...toDos, {toDo}])}>
                        Delete Task
                </button>
                }
            </ul>
        </Container>

    )
}

ReactDOM.render(<Header />, document.getElementById('root'))

export default Header
