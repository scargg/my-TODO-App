import React from "react"
import { ReactComponent as Check } from './check.svg'
import { ReactComponent as NoCheck } from './no-check.svg'
import { ReactComponent as Delete } from './delete.svg'

const iconTypes = {
    'check' : (color) => <Check className="icon-svg" fill={color}/>,
    'nocheck' : (color) => <NoCheck className="icon-svg" fill={color}/>,
    'delete' : (color) => <Delete className="icon-svg" fill={color}/>
}
function TodoIcons ({type,color,onClick}) {
    return (
        <span className={`icon-${type}`} onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}
export {TodoIcons}