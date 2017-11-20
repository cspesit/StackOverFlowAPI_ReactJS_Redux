import React from 'react';
const ButtonComponent = (props) => {
    return(
        <div className="searchButton">
            <input type="button" value="Search" onClick={props.clickButton}/>
        </div>
    )
}
export default ButtonComponent;