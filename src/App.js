import React, { Component } from 'react';
// import TaskForm from './components/Overview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: "",
        tasks: [],
    };


this.handleInput = this.handleInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

}

handleInput(e) {
    this.setState({ inputValue: e.target.value,
     });
    e.preventDefault();
};

handleSubmit() {
    let tasks = this.state.tasks;
    tasks.push(this.state.inputValue);
    this.setState({
        tasks
    });
}

listTasks() {
    let tasks = this.state.tasks;
    return (
        <ul>
            {
                tasks.map((val, index) => {
                    return (
                        <li key={index}>
                            { val }
                        </li>
                    );
                })
            }
        </ul>
    )
}

render() {
    return (
        <div>
          <input type="text" onChange={ (e) => this.handleInput(e) } />
          <input type="submit" onClick={ () => this.handleSubmit() } value="Submit" />
          { this.listTasks() }
        </div>
    )
}

/*
  return (
    <div className="App">
      <input type="text" onChange={ (e) => this.handleInput(e) } />
      <input type="submit" onClick={ () => this.handleSubmit() } value="Submit" />
      <TaskForm />
    </div>
  );
}

export default App;

*/
}