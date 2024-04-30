import React from 'react'
import ActionButton from '../simple/action_button/ActionButton';

const Displaying = () => {
    const displayTasks = () => {
        console.log("display tasks");
    };

    const displayCategories = () => {
        console.log("display cats");
    };

    const displayNotifs = () => {
        console.log("display notifs");
    };

    const displayShared = () => {
        console.log("display shared");
    };

    const displayFinished = () => {
        console.log("display finish");
    };

    return (
        <div>
            <header>Displaying:</header>
            <ActionButton label='Tasks' action={displayTasks} />
            <ActionButton label='Categories' action={displayCategories} />
            <ActionButton label='Notifications' action={displayNotifs} />
            <ActionButton label='Shared' action={displayShared} />
            <ActionButton label='Finished' action={displayFinished} />
        </div>
    );
}

export default Displaying