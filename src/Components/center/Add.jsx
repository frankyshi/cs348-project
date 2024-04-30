import React, { useState } from 'react';
import axios from 'axios';
import ActionButton from '../simple/action_button/ActionButton';
import NewTask from '../popup/new_task/NewTask';
import Overlay from '../popup/overlay/Overlay';

const Add = () => {
    const [addButtonClicked, setClick] = useState(false);
    const [newData, setData] = useState({});

    const handleClick = () => {
        setClick(true);
    }

    const handleNewData = async (newData) => {
        try {
            const response = await axios.post('http://localhost:5000/tasks', newData);
            console.log(response)
            setData(newData);
        } catch (error) {
            console.log('Error adding task: ', error)
        }
        setClick(false);
        window.location.reload();
    }

    return (
        <div className='add'>
            <ActionButton label='Add' action={handleClick} />
            { addButtonClicked && <NewTask setClick={setClick} setData={handleNewData} /> }
            { addButtonClicked && <Overlay /> }
        </div>
    );
}

export default Add;