import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Delete from '../../img/delete.png';
import Add from '../../img/add.png';

function Card2() {
    const [tasks, setTasks] = useState([
    ]);
    const [newTask, setNewTask] = useState('');
    const [isAddingTask, setIsAddingTask] = useState(false);

    function toggleAddTask() {
        setIsAddingTask(!isAddingTask);
    }

    function handleNewTaskChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
            setIsAddingTask(false);
        }
    }

    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <Card className='cards cards-style' style={{ width: '18rem' }}>
            <Card.Body>
                <span className='title-style '>Şu an yapılanlar</span>
                <ListGroup className='listgroup' variant="">
                    {tasks.map((task, index) => (
                        <ListGroup.Item className='task' key={index}>
                            {task}
                            <Button
                                className='button'
                                variant="outline-warning"
                                onClick={() => {
                                    deleteTask(index);
                                }}
                            >
                                <img className='delete' src={Delete} alt="" />
                            </Button>{' '}
                        </ListGroup.Item>
                    ))}
                    {isAddingTask ? (
                        <ListGroup.Item className='task'>
                            <input
                                className='newtask'
                                type='text'
                                placeholder='Yeni görevi girin'
                                value={newTask}
                                onChange={handleNewTaskChange}
                            />
                            <Button
                                className='addbutton'
                                variant='outline-warning'
                                onClick={addTask}
                            >
                                <img src={Add} alt="" />
                            </Button>{' '}
                        </ListGroup.Item>
                    ) : (
                        <ListGroup.Item className='task'>
                            <span className='addtask' onClick={toggleAddTask}>
                                Yeni görev ekle
                            </span>
                            <img className='add' src={Add} alt="" onClick={toggleAddTask} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Card2;
