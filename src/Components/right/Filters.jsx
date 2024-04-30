import React, { useState } from 'react'
import SelectList from '../simple/SelectList';

const Filters = ({ setFilters }) => {
    const statuses = ['None', 'Not started', 'Pending', 'Finished'];
    const priorities = ['None', 'Low', 'Medium', 'High'];
    const categories = ['None', 'School', 'Personal']; // user can add categories

    const [selectedPriority, setPriority] = useState('None')
    const [selectedStatus, setStatus] = useState('None')

    const handlePriorityChange = (value) => {
        setPriority(value);
    }

    const handleStatusChange = (value) => {
        setStatus(value);
    }

    const handleButtonClick = () => {
        setFilters(selectedPriority, selectedStatus);
    }

    return (
        <div>
            <header>Filters:</header>
            <SelectList identifier='priority' label='Priority ' options={priorities} passVal={handlePriorityChange} />
            <SelectList identifier='status' label='Status ' options={statuses} passVal={handleStatusChange} />
            {/* <SelectList identifier='priority' label='Category 'options={categories} /> */}
            <button onClick={handleButtonClick}>Filter</button>
        </div>
    );
}

export default Filters