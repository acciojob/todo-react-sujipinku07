import React, { useState } from 'react';

const App = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    // Update task as the user types
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    // Add a new task to the list
    const handleAddTodo = () => {
        if (task.trim() !== "") {
            const newTask = {
                id: Date.now(), // Unique ID for each task
                text: task,
            };
            setTaskList([...taskList, newTask]);
            setTask(""); // Clear input field
        }
    };

    // Remove a task from the list
    const handleDeleteTodo = (id) => {
        const updatedList = taskList.filter((item) => item.id !== id);
        setTaskList(updatedList);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                    style={{
                        padding: "8px",
                        width: "200px",
                        marginRight: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <button
                    onClick={handleAddTodo}
                    style={{
                        padding: "8px 12px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Add Todo
                </button>
            </div>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {taskList.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "10px",
                        }}
                    >
                        <span style={{ marginRight: "10px" }}>{item.text}</span>
                        <button
                            onClick={() => handleDeleteTodo(item.id)}
                            style={{
                                padding: "6px 10px",
                                backgroundColor: "#dc3545",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;