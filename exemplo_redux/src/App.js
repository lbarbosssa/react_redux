import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { hello } from './actions'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={ name: 'Lucas' }
    console.log('Constructor App (Component)')
  }

  componentDidMount(){
    console.log('Componente criado')
    
  }

  onClickBtn = () => {
    this.props.myComponentAction(this.state)
    console.log('Executando o Action')
  }

  render() {
    console.log('State ->', this.state)
    console.log('Props ->', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <button onClick={ () => this.onClickBtn() }>Chamar a Action</button>
        </header>
      </div>
    );
  }
}

//dados
const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    myMsg: state.msg,
    data: state.data
  }
}

//actions
const mapDispatchToProps = (dispatch) => {
  return {
    myComponentAction: (data) => dispatch(hello(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
