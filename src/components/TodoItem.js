import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getsStyle = ()=>{
        
        return{
            background: "#f4f4f4",
            padding: '10px',
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo_Item.completed ? 'line-through':'none'
        }
    };

    markComplete (e){
        console.log(this.props)
    };
    render() {
        return (
            <div style = {this.getsStyle()} >
                <h3>
                    <input type="checkbox" onChange={this.markComplete.bind(this)}/> {''}
                    {this.props.todo_Item.title}
                </h3>
            </div>
        )
    };
};
TodoItem.propTypes = {
    todo_Item: PropTypes.object.isRequired
  }



export default TodoItem
