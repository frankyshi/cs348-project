import React from 'react'
import ActionButton from '../simple/action_button/ActionButton';

const SortBy = () => {
    const sortTitle = () => {
        console.log("sort by title");
    };

    const sortDue = () => {
        console.log("sort by due date");
    };

    const sortCreate = () => {
        console.log("sort by create date");
    };

    return (
        <div>
            <header>Sort by:</header>
            <ActionButton label='Title' action={sortTitle} />
            <ActionButton label='Due Date' action={sortDue} />
            <ActionButton label='Create Time' action={sortCreate} />
        </div>
    );
}

export default SortBy