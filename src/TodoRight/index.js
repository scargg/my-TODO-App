import './TodoRight.css'
function TodoRight (props) {
    return (
        <div className='TodoRight'>
            {props.children}
        </div>
    )
}
export {TodoRight}