import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <p>{this.props.user.firstName}</p>
        <p>Fellowship ID: {this.props.user.fellowshipId}</p>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState, null)(Profile)
