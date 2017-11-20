import React, {Component} from 'react';
const TextInput = (props) => {
    return (
        <div className="TextBoxView">
            <input type="text" value={props.searchTerm} onChange={props.updateValue}/>
        </div>
    )
}
export default TextInput;