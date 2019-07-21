import * as React from 'react';
class App extends React.Component<any,any>{
  constructor(props) {
    super(props);
    this.state ={
      name: "Adarsh",
      lastName: "Jayakumar"
    }
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);

  }
  //This is called once the DOM has been rendered for this component
  // This is called only for initial render
  componentDidMount(){
    document.title = this.state.name + ' '+ this.state.lastName;
  }

  // This is not called for initial render
  componentDidUpdate(){
    document.title = this.state.name + ' '+ this.state.lastName;
  }
  lastNameChangeHandler(e):void {
    this.setState({
      lastName: e.target.value
    })
  }
  nameChangeHandler(e):void {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return (
      <section>
          <input type="text" value={this.state.name} onChange={this.nameChangeHandler}></input>
          <p>{this.state.name}</p>
          <input type="text" value={this.state.lastName} onChange={this.lastNameChangeHandler}></input>
          <p>{this.state.lastName}</p>
      </section>
    );

  }  
}
export default App;