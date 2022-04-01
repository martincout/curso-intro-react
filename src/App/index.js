import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useTodos } from './useTodos';
import TodoForm from '../TodoForm';
import Modal from '../Modal';
import {TodoLoader} from '../TodoLoader';
import EmptyTodo from '../EmptyTodo';
import TodoError from '../TodoError';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    totalTodos,
    completedTodos,
    searchValue, 
    setSearchValue,
    setOpenModal,
    addTodo,
} = useTodos();
  return (
    <React.Fragment>
        <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
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
                <TodoForm
                    setOpenModal={setOpenModal}
                    addTodo={addTodo}
                ></TodoForm>
            </Modal>
        )}
        
        <CreateTodoButton 
            setOpenModal = {setOpenModal}
        />
    </React.Fragment>
)
}

export default App;