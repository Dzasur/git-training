import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      submit: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      input: this.state.input,
      submit: [...this.state.submit, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Controlled component</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>sss</button>
        </form>
        <h3>{this.state.submit.map(item=><ul>
          <li>{item}</li>
        </ul>)}</h3>
      </div>
    )
  }
}
