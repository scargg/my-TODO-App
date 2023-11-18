import './TodoLeft.css'
function TodoLeft (props) {
    return (
        <div className="TodoLeft">
            {props.children}
        </div>
    )
}
export {TodoLeft}