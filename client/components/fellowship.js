import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Fellowship extends React.Component {
  constructor() {
    super()
    this.state = {fellowships: []}
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/fellowships')
    this.setState({fellowships: data})
  }
  render() {
    return (
      <div>
        {this.state.fellowships.map(fellowship => (
          <div key={fellowship.id}>
            <Link to={`/fellowships/${fellowship.id}`}>{fellowship.name} </Link>
          </div>
        ))}
      </div>
    )
  }
}
