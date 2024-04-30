import './App.css';
import React, { useState, useEffect } from 'react';

import Displaying from './Components/left/Displaying'

import Add from './Components/center/Add'
import AscDesc from './Components/center/AscDesc';
import TaskList from './Components/center/TaskList';

import Filters from './Components/right/Filters';
import SortBy from './Components/right/SortBy';

import axios from 'axios'

function App() {
    const [tasks, setTasks] = useState([]);
    const [filters, setFilters] = useState({
        // priority: {'$exists': true},
        // status: {'$exists': true}
    });

    const handleSetFilters = (priority, status) => {
        // let priority_val, status_val;

        // if (priority == 'None') {
        //     priority_val = {'$exists': true};
        // } else {
        //     priority_val = priority;
        // }

        // if (status == 'None') {
        //     status_val = {'$exists': true};
        // } else {
        //     status_val = status;
        // }

        setFilters({
            priority: priority,
            status: status
        })
    }

    // GET request to get all tasks
    useEffect(() => {
        const getTasks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tasks', {
                    params: {
                        priority: filters.priority,
                        status: filters.status
                    }
                });
                setTasks(response.data);
                console.log(response.data)
            } catch (error) {
                console.log('Error getting tasks from tasklist: ', error);
            }
        };
        getTasks();
    }, [filters]);

    return (
        <div className='container'>
            <div className='column left'>
                {/* <div><Displaying /></div>  */}
            </div>
            <div className='column center'>
                <div><Add /></div>
                {/* <div><AscDesc /></div> */}
                <div><TaskList tasks={tasks}/></div>
            </div>
            <div className='column right'>
                <div><Filters setFilters={handleSetFilters} /></div>
                {/* <div><SortBy /></div> */}
            </div>
        </div>
    );
}

export default App;