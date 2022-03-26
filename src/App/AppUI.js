import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import TodoForm from '../TodoForm';
import Modal from '../Modal';
import {TodoLoader} from '../TodoLoader';
import EmptyTodo from '../EmptyTodo';
import TodoError from '../TodoError';

export default function AppUi() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <TodoError/>}
                {loading && <TodoLoader/>}
                {(!loading && !searchedTodos.length) && <EmptyTodo></EmptyTodo>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm></TodoForm>
                </Modal>
            )}
            
            <CreateTodoButton 
                setOpenModal = {setOpenModal}
            />
        </React.Fragment>
    )
}
