import React from "react";
function TodoSeachWork (props) {
    
    return (
        <input
            placeholder="Busca una tarea"
            value={props.searchValue}
            onChange={(event) => {
                props.setSearchValue(event.target.value)
            }}
        />
    )
}
export {TodoSeachWork}