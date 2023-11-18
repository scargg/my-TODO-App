import { CompleteIcon } from "./CompleteIcon"
import { DeleteIcon } from "./DeleteIcon"

function TodoItem (props) {
    return (
        <li>
            <CompleteIcon 
                completed={props.completed}
                onCompleted={props.onCompleted}
            />
            <button className={`${props.completed && "task-completed"}`}>{props.text} </button>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    )
}
export {TodoItem}