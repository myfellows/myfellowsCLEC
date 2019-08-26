import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

export default class Events extends React.Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/events')
    this.setState({events: data})
  }
  render() {
    return (
      <div>
        {this.state.events.map(event => <div key={event.id}>{event.name}</div>)}
      </div>
    )
  }
}
