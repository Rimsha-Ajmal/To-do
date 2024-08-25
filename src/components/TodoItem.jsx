import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {

    function handleEditInput(event) {
        props.setCurrentEdit(event.target.value)
    }

    return <div className="items">
        <li key={props.id} >{props.isEditing ? (<input className="editInput" type="text" value={props.currentEdit} onChange={handleEditInput} />) : (props.todo)}</li>
        <div className="itemsButton">
            {props.isEditing ? (<button onClick={props.handleSaveEdit}><FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "17px", color: "hsl(198, 1%, 29%)" }} /></button>) : (<div><button onClick={() => { props.handleEdit(props.id) }}><FontAwesomeIcon icon={faPenToSquare} style={{ fontSize: "17px", color: "hsl(198, 1%, 29%)" }} /></button>
                <button onClick={() => { props.onChecked(props.id) }}><FontAwesomeIcon icon={faTrashCan} style={{ fontSize: "17px", color: "hsl(198, 1%, 29%)" }} /></button></div>)}
        </div>
    </div>
}

export default TodoItem;