import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import TodoCard from "../components/TodoCard";

function TodoList() {
    const navigate = useNavigate();

    const createNewTodo = () => {
        navigate('/create', { replace: false });
    }

    const editTodo = () => {
        navigate('/edit', { replace: false });
    }

    return <>
        <div className="container">
            <div className="row pt-4">
                <div className="col-12 col-md-12">
                    <h1 className="text-center">Todo List</h1>
                </div>
                <div className="col-12 col-md-12">
                    <Button onClick={createNewTodo} variant="primary">Create New Todo</Button>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col col-md-4">
                    <TodoCard editTodo={editTodo} title="Test Todo" description="Lorem Ipsum Dolar Imut" status="Not Completed" />
                </div>
                <div className="col col-md-4">
                    <TodoCard editTodo={editTodo} title="Test Todo" description="Lorem Ipsum Dolar Imut" status="Not Completed" />
                </div>
                <div className="col col-md-4">
                    <TodoCard editTodo={editTodo} title="Test Todo" description="Lorem Ipsum Dolar Imut" status="Not Completed" />
                </div>
            </div>
        </div>
    </>
}


export default TodoList;
