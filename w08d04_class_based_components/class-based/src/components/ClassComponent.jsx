import { Component } from "react";


class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, name: "James"}
    this.increment = this.increment.bind(this);
  }

  increment(){
    // this.setState({counter: this.state.counter + 1});
    this.setState((prev) => ({counter: prev.counter + 1}))
  }


  render() {
    return (
      <div>
        <h2>The Class-based Component!!!</h2>
        <p>{this.props.someProp}</p>
        <p>the counter value is: {this.state.counter}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    )
  }
}


export default ClassComponent