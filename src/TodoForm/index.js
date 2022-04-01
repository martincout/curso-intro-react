import React from 'react'
import './TodoForm.css';

export default function TodoForm({
    addTodo,
    setOpenModal
}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(event.target.value !== ""){
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder='Cortar cebolla'
                value={newTodoValue}
                onChange={onChange}
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button
                    onClick={onCancel}
                    type="button"
                    className='TodoForm-button TodoForm-button-cancel'
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className='TodoForm-button TodoForm-button-add'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };