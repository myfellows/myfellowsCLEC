import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

export default class SingleFellowship extends React.Component {
  constructor() {
    super()
    this.state = {fellowship: {}, users: []}
    this.join = this.join.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/fellowships/${this.props.match.params.id}`
    )
    this.setState({fellowship: data.fellowship, users: data.users})
  }
  async join() {
    const {data} = await axios.put(
      `/api/fellowships/${this.props.match.params.id}`
    )
  }
  render() {
    return (
      <div>
        {this.state.fellowship.name}{' '}
        <button type="button" onClick={this.join}>
          Join
        </button>
        <p>Members</p>
        {this.state.users.map(user => (
          <div key={user.id}>{user.firstName}</div>
        ))}
      </div>
    )
  }
}
