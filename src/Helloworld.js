import React, { Component } from 'react';

class HelloWorld extends Component{
	customeStyle = {
		backgroundColor : 'lightblue'
	}


	render(){
		//Mutable - can change
		this.state
		//immutable-cannot be change
		this.props

		return(
			<a href={this.props.link} style={this.customeStyle}>
				{this.props.linkText}
			</a>
		)
	} 
}


export default HelloWorld;

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
