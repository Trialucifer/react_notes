import React, {Component} from "react"
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'

export default class Header extends Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {keyCode, target} = event
        // console.log(keyCode, target.value)
        if(keyCode == 13) return;
        const todoObj = {id: nanoid(), name: target.value, done: false}
        // console.log('Header的 todoObj：', todoObj)
        this.props.addTodo(todoObj)
        //清空输入
        // code = ''
    }

    render() {
        return(
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}