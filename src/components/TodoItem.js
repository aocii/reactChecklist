import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getsStyle = ()=>{
        
        return{
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo_Item.completed ? 'line-through':'none'
        } // getstyle fonksiyonu ile obje döndürdük , aşağıdaki div de style ları ekledik 
    };

    
    render() {
        const {id,title } = this.props.todo_Item
        return (
            <div style = {this.getsStyle()} >
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {''} 
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </h3>
                
            </div>
        )
    };
};
TodoItem.propTypes = {
    todo_Item: PropTypes.object.isRequired
  }
const btnStyle ={
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
