import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export const Sidebar = ({ isAdmin }) => (
  <ul className="nav nav-stacked">
    <li><Link>Services</Link></li>
    <li><Link>Records</Link></li>
    <li><Link>Equipment</Link></li>
    { isAdmin ? ( <li><hr /></li> ) : null }
    { isAdmin ? ( <li><Link>Admin</Link></li> ) : null }
  </ul>
)

const mapStateToProps = () => ({
  isAdmin: true
})

const mapDispatchToProps = () => ({
  //
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
