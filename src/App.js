import React, { Component } from 'react';

class App extends Component{

    state = {

        task:{
            title: ' Primera tarea ',
            done: true
        }
    }

    handleClick = () =>{
        const task = this.state.task;
        task.done = !task.done;
        this.setState({task});
    }

    render(){

        return(
            <div>
                {/* <h3>{ this.state.task.title } </h3>
                <h3>{ this.state.task.done.toString() } </h3>
                <button onClick={this.handleClick}>Tareas</button> */}
            </div>
        )
    }
}

export default App;