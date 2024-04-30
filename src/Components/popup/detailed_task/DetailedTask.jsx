import './DetailedTask.css'
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import ActionButton from '../../simple/action_button/ActionButton';
import NewTask from '../new_task/NewTask';
import Overlay from '../overlay/Overlay';

const DetailedTask = ({ info, setState }) => {
    const [addButtonClicked, setClick] = useState(false);
    const [editData, setData] = useState({});

    const handleClick = () => {
        setClick(true);
    }

    const handleEditTask = async (editData) => {
        try {
            const response = await axios.put(`http://localhost:5000/tasks/${info._id.$oid}`, editData);
            console.log(response.data);
        } catch (error) {
            console.log('Error editing task: ', error);
        }
        window.location.reload();
    };

    const deleteTask = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/tasks/${info._id.$oid}`);
            console.log(response.data);
        } catch (error) {
            console.log('Error deleting task: ', error);
        }
        setState(false);
        window.location.reload();
    };

    const exit = () => {
        setState(false);
    }

    return (
        <div className='detailed-task'>
            <div className='task-container'>
                <div className='task-top'>
                    <p className='title'>{info.title}</p>
                    <p className='priority'>Priority: {info.priority}</p>
                    <p className='status'>Status: {info.status}</p>
                    <p className='due'>Due: {info.due}</p>
                    <ActionButton className='exit' label='X' action={exit}/>
                </div>
                <div className='task-middle'>
                    <p className='desc'>{info.desc}</p>
                </div>
                <div className='task-bottom'>
                    <ActionButton className='action-button' label='Edit' action={handleClick} />
                    <ActionButton className='action-button' label='Delete' action={deleteTask} />
                    <p className='create'>Created: {info.create}</p>
                </div>
            </div>
            { addButtonClicked && <NewTask setClick={setClick} setData={handleEditTask} /> }
            { addButtonClicked && <Overlay /> }
        </div>
    );
}

DetailedTask.propTypes = {
    title: PropTypes.string,
    due: PropTypes.string,
    create: PropTypes.string,
    desc: PropTypes.string,
    status: PropTypes.string,
    priority: PropTypes.string
};

export default DetailedTask;