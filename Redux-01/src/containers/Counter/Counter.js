import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	render() {
		let results = [];

		this.props.results.forEach((result, id) => {
			results.push(
				<li
					onClick={() => {
						this.props.onDeleteResult(id);
					}}
					key={id}
				>
					{result}
				</li>
			);
		});

		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
				<hr />
				<button onClick={this.props.onStoreResult}>Store Result</button>
				<ul>{results}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter,
		results: state.results,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
		onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
		onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
		onDeleteResult: index => dispatch({ type: actionTypes.DELETE_RESULT, index }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter);