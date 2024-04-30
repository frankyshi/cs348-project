import './NewTask.css'
import React from 'react';
import SelectList from '../../simple/SelectList';
import FillIn from '../../simple/FillIn';
import ActionButton from '../../simple/action_button/ActionButton';

const NewTask = ({ setClick, setData }) => {
    // get data from the form, turn into json, send it back to add
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newData = {};
        for (const [key, val] of formData.entries()) {
            newData[key] = val;
        }
        setData(newData);
        //console.log(newData)
    };

    const exit = () => {
        setClick(false);
    }

    return (
        <div className='new-task'>
            <div className='new-task-container'>
                <ActionButton className='exit' label='X' action={exit}/>
                <form onSubmit={handleSubmit}>
                    <FillIn identifier='title' label='Title ' />

                    <label htmlFor='priority'>Priority </label>
                    <select id='priority' name='priority'>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                    <label htmlFor='status'>Status </label>
                    <select id='status' name='status'>
                        <option>Not started</option>
                        <option>Pending</option>
                        <option>Finished</option>
                    </select>

                    {/* <SelectList identifier='priority' label='Priority ' options={['Not started', 'Pending', 'Finished']} />
                    <SelectList identifier='status' label='Status ' options={['Low', 'Medium', 'High']} /> */}

                    <FillIn identifier='due' label='Due ' />
                    <label htmlFor='desc'>Description </label>
                    <textarea id='desc' name='desc' />
                    <FillIn identifier='create' label='Created ' />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        </div>
    );
}

export default NewTask;