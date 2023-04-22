import React from 'react';

const Btn = props => {

    return (
        <div>
            <button className={props.classes} type="submit">{props.text}</button>
        </div>
    );
};

export default Btn;