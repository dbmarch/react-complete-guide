import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
	// state = {
	// 	persons: [],
	// };

	personAddedHandler = () => {
		const newPerson = {
			id: Math.random(), // not really unique but good enough here!
			name: 'Max',
			age: Math.floor(Math.random() * 40),
		};
		this.props.onAddPerson(newPerson);
		// this.setState(prevState => {
		// 	return { persons: prevState.persons.concat(newPerson) };
		// });
	};

	personDeletedHandler = personId => {
		this.props.onRemovePerson(personId);
		// this.setState(prevState => {
		// 	return { persons: prevState.persons.filter(person => person.id !== personId) };
		// });
	};

	render() {
		return (
			<div>
				<AddPerson personAdded={this.personAddedHandler} />
				{this.props.persons.map(person => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.personDeletedHandler(person.id)}
					/>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		persons: [...state.persons],
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddPerson: newPerson => dispatch({ type: actionTypes.ADD_PERSON, payload: newPerson }),
		onRemovePerson: index => dispatch({ type: actionTypes.REMOVE_PERSON, payload: index }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Persons);
