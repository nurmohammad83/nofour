import React, { useState } from 'react';

const Toggel = () => {
    const [todo, setTodo]=useState('')
    const [warning, setWarning]=useState('')
   const handleInput=(e)=>{


    const  inputValue = e.target.value
    const updateWarning = inputValue.includes('.js') ?'You need Javascript skill complete the task. Do you have it' : null;
    setTodo(inputValue)
    setWarning(updateWarning)
    
   }
    return (

        <div className='toggolClass'>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput}></textarea>
            </p>
            <hr />
            <h2>{warning || "Good Choice!" }</h2>
            
        </div>
    );
};

export default Toggel;
