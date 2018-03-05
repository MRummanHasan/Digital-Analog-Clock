import React, { Component } from 'react';

class Method extends Component {
	myFacebookLink(){
		return 'https://github.com/MRummanHasan';
	}

	facebookUser() {
		return 'Rumman Hasan';
	}

	render() {
		return (
			<div>
				<p>
					My facebook ID is:
					<a href={this.myFacebookLink()}> {this.facebookUser()} </a>
				</p>
			</div>
		)
	}
}
export default Method;