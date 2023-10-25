import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor() {
    super();
    this.state = {
      totalClicks: 0,
      listaHorariosClick: []
    };
  }

  handleClick = () => {
    const horarioClickAtual = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      totalClicks: prevState.totalClicks + 1,
      listaHorariosClick: [...prevState.listaHorariosClick, horarioClickAtual]
    }));
  }

  render() {
    return (
      <div>
        <h1>Registro de Horário de Cliques</h1>
        <p>Total de Cliques: {this.state.totalClicks}</p>
        <button onClick={this.handleClick}>Clique Aqui</button>
        <ul>
          {this.state.listaHorariosClick.map((horario, index) => (
            <li key={index}>{horario}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClickTracker;
