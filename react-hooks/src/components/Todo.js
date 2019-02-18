import React, { useState, useEffect } from 'react'
import axios from 'axios'

const todo = props => {
	const [todoName, setTodoName] = useState('')
	const [todoList, setTodoList] = useState([])

	useEffect(() => {
		axios
			.get('https://todo-hook.firebaseio.com/todos.json')
			.then(result => {
				console.log('Retrieved Data', result)
			})
			.catch(err => console.log(err))
	})
	// const [todoState, setTodoState] = useState({ userinput: '', todoList: [] })

	const inputChangeHandler = event => {
		setTodoName(event.target.value)
		// setTodoState({ ...todoState, userInput: event.target.value })
		// console.log(todoState)
	}

	const todoAddHandler = () => {
		if (todoName) {
			setTodoList(todoList.concat(todoName))
			axios
				.post('https://todo-hook.firebaseio.com/todos.json', { name: todoName })
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err)
				})
			setTodoName('')
		}
		// if (todoState.userInput) {
		// 	setTodoState({ ...todoState, todoList: todoState.todoList.concat(todoState.userInput) })
		// }
	}

	return (
		<React.Fragment>
			<input type="text" placeholder="Todo" onChange={inputChangeHandler} value={todoName} />
			<button type="button" onClick={todoAddHandler}>
				Add
			</button>
			<ul>
				{todoList.map((todo, i) => (
					<li key={i}>{todo}</li>
				))}
			</ul>
		</React.Fragment>
	)
}

export default todo
