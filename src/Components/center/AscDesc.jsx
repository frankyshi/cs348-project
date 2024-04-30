import React from "react";
import ActionButton from "../simple/action_button/ActionButton";

const AscDesc = () => {
    const sortAsc = () => {
        console.log('sort asc');
    }

    const sortDesc = () => {
        console.log('sort desc');
    }

    return (
        <div className='asc-desc'>
            <ActionButton label='Asc' action={sortAsc} />
            <ActionButton label='Desc' action={sortDesc} />
        </div>
    );
}

export default AscDesc;