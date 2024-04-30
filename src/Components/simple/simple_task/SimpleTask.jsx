import './SimpleTask.css'
import React, { useState } from 'react';
import DetailedTask from '../../popup/detailed_task/DetailedTask';
import Overlay from '../../popup/overlay/Overlay';

const SimpleTask = ({ info }) => {
    const [display, setDisplay] = useState(false);

    const handleTaskClick = () => {
        setDisplay(true);
    }

    return (
        <div>
            <div className='simple-task' onClick={handleTaskClick}>
                <p className='title'>{info.title}</p>
                <p className='priority'>{info.priority} Priority</p>
                <p className='status'>{info.status}</p>
                <p className='due'>Due {info.due}</p>
            </div>
            <div>
                { display && <DetailedTask info={info} setState={setDisplay} />}
                { display && <Overlay /> }
            </div>
        </div>
    );
}

export default SimpleTask;