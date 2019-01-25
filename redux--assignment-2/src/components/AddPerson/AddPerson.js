import React, { Component } from 'react';

import './AddPerson.css';

class AddPerson extends Component {
	state = {
		name: '',
		age: null,
	};

	nameChangedHandler = event => {
		this.setState({ name: event.target.value });
	};

	ageChangedHandler = event => {
		this.setState({ age: event.target.value });
	};

	render() {
		return (
			<div className="AddPerson">
				<input type="text" placeholder="Name" onChange={this.nameChangedHandler} value={this.state.name} />
				<input type="number" placeholder="Age" onChange={this.ageChangedHandler} />
				<button
					onClick={() => {
						this.props.personAdded({
							name: this.state.name,
							age: this.state.age,
							id: Math.random(),
						});
					}}
				>
					Add Person
				</button>
			</div>
		);
	}
}

export default AddPerson;
