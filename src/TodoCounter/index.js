function TodoCounter ({completed,total}) {
    return (

        total == 0 ?
            <h2 className="TodoCounter">
                No tienes Tareas pendientes
            </h2>
        : completed == total ?
            <h2 className="TodoCounter">
                Felicidades completaste todas las tareas 
            </h2>
            :
                <h2 className="TodoCounter">
                    Has Completado {completed} de {total} TODOS
                </h2>
    )
}

export {TodoCounter}