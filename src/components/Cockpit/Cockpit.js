import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/_Aux';

const cockpit = props => {
	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<Aux>
			<div className={classes.Cockpit}>
				<h1>{props.appTitle}</h1>
				<h1>Hi I am a react App! </h1>
				<p className={assignedClasses.join(' ')}> This is working! </p>
				<button className={btnClass} onClick={props.clicked}>
					Switch Name
				</button>
				<button onClick={props.login}> Log In </button>
			</div>
		</Aux>
	);
};

export default cockpit;
