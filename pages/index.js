import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeModo,changeName } from '../redux/actions';
import Nav from '../components/nav';

const mapStateToProps = state => {
  return {
    modo: state.modo,
    modoTitle: state.modoTitle
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeModo: modo => dispatch(changeModo()),
    changeName: name => dispatch(changeName(name))
  }
}



class IndexConnected extends Component {
  constructor(){
    super();
    this.state = {
      name: ""
    }
    this.changingModo = this.changingModo.bind(this)
    this.typing = this.typing.bind(this)

  }

  changingModo() {
    console.log(this.props.modo)
    console.log(this.props.modoTitle)
    this.props.changeModo()
  }
  typing(e){
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]:value
    },function(){
      let nameToStore = this.state.name
      this.props.changeName(nameToStore)
    })
  }



  render () {
    return (
    <div>
     <Nav/>
      INDEX {this.props.modo}
      <br/>
      <button onClick={this.changingModo}>{this.props.modoTitle}</button>

      <input name="name" onChange={this.typing} value={this.state.name} type="text"/>
    </div>
      )
  }
}



const Index = connect(mapStateToProps,mapDispatchToProps)(IndexConnected)

export default Index