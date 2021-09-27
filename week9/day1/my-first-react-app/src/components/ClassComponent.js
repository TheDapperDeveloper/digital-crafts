import React, { Component } from 'react'

export default class ClassComponent extends
Component {
    state ={
        counter: 0,
        studentName: "Brande"
    }

    IncreaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    DecreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    ChangeStudent = () => {
        let name ="Brittney"
        this.setState({ studentName: name})
    }

    render() {
        return (
            <div>
                <p>Class Counter</p>
                <p>student is {this.state.studentName}</p>
                <p>counter is {this.state.counter}</p>
                <button onClick={() => this.IncreaseCounter()}>Increase</button>
                <button onClick={() => this.DecreaseCounter()}>Decrease</button>
                <button onClick={() => this.ChangeStudent()}>Change The Student</button>

            </div>
        )
    }
}
