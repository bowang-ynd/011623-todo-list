import React, { useState, useEffect } from 'react'
import Form from './components/Form';
import Display from './components/Display';

const App = () => {

    const [lists, setLists] = useState(JSON.parse(window.localStorage.getItem("toDoLists")) || []);
    
    // useEffect to store state when refreshing the page
    useEffect( () =>{
        const data = window.localStorage.getItem("toDoLists");
    }, [])

    useEffect( () =>{
        window.localStorage.setItem("toDoLists", JSON.stringify(lists));
    }, [lists]);

    // handler for checkboxes
    // when check, update the boolean value of a todo list from true to false, and vice versa
    // hence, updating the "line-through" text-decoration on chosen todo list
    const handleCheck = (bool, idx) =>{
        const updatedLists = lists.map( (item, itemIdx) =>{
            if (idx === itemIdx) {
                return {...item, finished: bool};
            } 
            return item;
        })
        setLists(updatedLists);
    }

    // handler for delete button
    // when click, delete the chosen todo list
    const handleDelete = (idx) =>{
        const updatedLists = lists.filter( (_, index) => idx !== index)
        setLists(updatedLists);
    }

    return (
        <div className='container my-3'>
            <h2 className='text-center'>ToDo List</h2>
            <Form lists={ lists } setLists={ setLists }/>
            <Display lists={ lists } handleCheck={ handleCheck } handleDelete={ handleDelete }/>
        </div>
    )
}

export default App