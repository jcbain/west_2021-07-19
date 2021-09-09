import { Component } from "react";

class LifecycleComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      interval: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // will occur after the component mounts
  // only happens once during the component's lifecycle

  handleChange(event){
    this.setState({searchTerm: event.target.value})
  }

  componentDidMount(){
    console.log('%cComponent mounted', 'color: green')
    const interval = setInterval(() => {
      console.log('%cInterval ran', 'color: pink');
    }, 1000)

    this.setState({interval: interval})
    // clearInterval(interval)
  }

  // will run anytime there is an update to our component
  // ie state changes or props change
  componentDidUpdate(prevProps, prevState){
    console.log('previous State', prevState)
    console.log('the component updated')


  }

  // runs when the component is unmount
  componentWillUnmount(){
    console.log('component is going to unmount')
    clearInterval(this.state.interval)
  }


  render(){
    return (
      <div>
        <h2>Lifecycles!!!!</h2>
        <input
          value={this.state.searchTerm}
          onChange={this.handleChange}
         />
         <p>search term: {this.state.searchTerm}</p>
      </div>
    )
  }
}


export default LifecycleComponent;