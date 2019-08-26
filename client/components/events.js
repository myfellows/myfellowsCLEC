import React from 'react'

import axios from 'axios'

export default class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      date: new Date(),
      capacity: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  async handleSubmit(event) {
    try {
      event.preventDefault()
      await axios.post('/api/events', this.state)
      this.setState({
        name: '',
        description: '',
        date: new Date(),
        capacity: 0
      })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label htmlFor="capacity">Capacity</label>
        <input
          type="number"
          name="capacity"
          value={this.state.capacity}
          onChange={this.handleChange}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <button type="submit"> submit</button>
      </form>
    )
  }
}
