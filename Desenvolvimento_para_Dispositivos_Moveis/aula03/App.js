import React, { Component } from 'react';

class TaskApp extends Component {
  constructor() {
    super();
    this.state = {
      taskTitle: '',
      taskStatus: 'no-prazo',
      taskList: []
    };
  }

  handleTitleChange = (e) => {
    this.setState({ taskTitle: e.target.value });
  }

  handleStatusChange = (e) => {
    this.setState({ taskStatus: e.target.value });
  }

  addTask = () => {
    const { taskTitle, taskStatus, taskList } = this.state;
    if (taskTitle.trim() === '') {
      alert('Digite um título para a tarefa.');
      return;
    }
    const newTask = {
      title: taskTitle,
      status: taskStatus
    };
    this.setState({
      taskList: [...taskList, newTask],
      taskTitle: '',
      taskStatus: 'no-prazo'
    });
  }

  render() {
    const { taskTitle, taskStatus, taskList } = this.state;

    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          placeholder="Título da Tarefa"
          value={taskTitle}
          onChange={this.handleTitleChange}
        />
        <select value={taskStatus} onChange={this.handleStatusChange}>
          <option value="atrasada">Atrasada</option>
          <option value="no-prazo">No Prazo</option>
          <option value="proximo-ao-prazo">Próximo ao Prazo</option>
        </select>
        <button onClick={this.addTask}>Adicionar</button>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              <strong>{task.title}:</strong> {task.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskApp;
