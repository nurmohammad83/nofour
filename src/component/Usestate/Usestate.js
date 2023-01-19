import React, { useState } from 'react';

const Usestate = () => {
    const [input, setInput]=useState("")
    const [user, setUser]= useState({
        name: 'Nur',
        email:'nurmohammad@gmail.com',
        age:23
    })
    const changerUser=()=>{

        setUser((prv)=>({...prv, name:input}))
    }
    localStorage.setItem('user', JSON.stringify(user))
    
    console.log(user);
    return (
        <div>
           <h1>User:</h1> 
           <input onChange={e=>setInput(e.target.value)} type="text" placeholder='enter your name' />
           <button onClick={changerUser}> ChangUser Name</button>
           <span>User name is: {user.name}</span>
        </div>
    );
};

export default Usestate;