import React from 'react';

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <div className='todo-card' key={todo.id}>
          <div className='todo-card-header'>
            <span>
              <i
                onClick={props.onUpdate(todo, index)}
                className='bx bxs-check-circle check'
              ></i>
              <i
                onClick={props.onDelete(todo)}
                className='bx bxs-x-circle x'
              ></i>
            </span>
          </div>
          <div className='todo-card-content'>
            <span className={todo.done ? 'done' : ''}>
              <p> {todo.content}</p>

              {/* <h6>Priority: {todo.priority}</h6> */}
            </span>
            {/* <button onClick={props.onUpdate(todo, index)}>done</button>a */}
          </div>
          <div className='todo-card-footer'>
            <span className='priority'>
              {new Date(todo.dateModified).toLocaleString('en-GB')}
            </span>
            <span className='date numberCircle'>{todo.priority}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
