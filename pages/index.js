import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeModo } from '../redux/actions';

const mapStateToProps = state => {
  return {
    modo: state.modo,
    modoTitle: state.modoTitle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeModo: modo => dispatch(changeModo())
  }
}



class IndexConnected extends Component {
  constructor(){
    super();
    this.changingModo = this.changingModo.bind(this)
  }

  changingModo() {
    console.log(this.props.modo)
    console.log(this.props.modoTitle)
    this.props.changeModo()
  }

  render () {
    return (
    <div>
      {
        console.log('dd',this.props.modo)
      }

      {
        console.log('dds',this.props.modoTitle)
      }
      INDEX {this.props.modo}
      <br/>
      <button onClick={this.changingModo}>{this.props.modoTitle}</button>
    </div>
      )
  }
}



const Index = connect(mapStateToProps,mapDispatchToProps)(IndexConnected)

export default Index