import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
    name: state.name
  } 
}

const ConnectedNav = ({name}) => (
  <nav>
    Hola {name}
  </nav>
)

const Nav = connect(mapStateToProps)(ConnectedNav)

export default Nav 