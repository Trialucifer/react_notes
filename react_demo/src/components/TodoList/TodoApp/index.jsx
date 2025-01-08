import React, {Component} from "react";
import Header from "../Header";
import List from "../List";

export default class TodoApp extends Component {

    state = {todos:[
            {id:'01',name:'吃饭', done: false},
            {id:'02',name:'睡觉', done: true},
            {id:'03',name:'起床', done: false}
        ]
    }

    addTodo = (todoObj) => {
        const {todos} = this.state;
        //追加一个todo
        const newTodos = [todoObj,...todos];
        this.setState({todos:newTodos})
        // console.log('App的新对象：', newTodos)
    }

    //updateTodo用于更新一个todo对象
	updateTodo = (id,done)=>{
		//获取状态中的todos
		const {todos} = this.state
		//匹配处理数据
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({todos:newTodos})
	}

	//deleteTodo用于删除一个todo对象
	deleteTodo = (id)=>{
		//获取原来的todos
		const {todos} = this.state
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos:newTodos})
	}

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                </div>
            </div>
        )
    }
}