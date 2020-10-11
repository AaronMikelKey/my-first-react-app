import React from 'react';

class TaskForm extends React.Component {
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
                { this.listTasks() }
            </div>
        )
    }
}

export default TaskForm;