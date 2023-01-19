import React, { useState } from 'react';

const Condition = () => {
    const [condition, setCondition] = useState(false);

    const addBtn=()=>{
        setCondition(true)
    }
    return (

        <div>
            <p>use State value</p>
            <button onClick={addBtn}> set Use</button>
            {condition && <p>Hello World !</p> }

        </div>
    );
};

export default Condition;