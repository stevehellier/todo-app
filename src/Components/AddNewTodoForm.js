import React from 'react';

const AddNewTodoForm = (props) => {
  if (props.newTodo) {
    console.log(props.newTodo);
  }
  return (
    <div>
      <form onSubmit={props.onFormSubmit}>
        <label htmlFor='newTodo'>Add a Todo</label>
        <input
          id='newTodo'
          name='newTodo'
          value={props.text}
          onChange={props.onTodoChange}
        />
        <button disabled={props.text.length < 3}>Add a Todo</button>
      </form>
    </div>
  );
};

export default AddNewTodoForm;
