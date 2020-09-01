import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    let[inputList, setInputList] = useState('');
    let[itemsList, setItemsList] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    }
    
    const onSubmit = () =>{
        setItemsList((oldItems)=>{
            return [...oldItems, inputList];
        });
        setInputList('');
    }

    const deleteItem = (id) =>{
        setItemsList((oldItems)=>{
            return oldItems.filter((arr, index) =>{
                return id !== index;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add your task" onChange={itemEvent} value={inputList} />
                    <button onClick={onSubmit}> + </button>

                    <ol>
                        {itemsList.map((item, index) => {
                            return <ToDoList key={index} id={index} data={item} onSelect={deleteItem} />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;