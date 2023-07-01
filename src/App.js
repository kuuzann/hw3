import React, { useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  margin-bottom: 10px;
`;

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <AppWrapper>
      <div>
        <h1>Todo List</h1>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={task} onChange={handleChange} />
          <Button type="submit">Add Task</Button>
        </Form>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index}>{task}</TaskItem>
          ))}
        </TaskList>
      </div>
    </AppWrapper>
  );
};

export default App;
