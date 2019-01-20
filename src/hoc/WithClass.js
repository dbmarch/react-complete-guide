import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
	const WithClassPlus = class extends Component {
		render() {
			return (
				<div className={className}>
					<WrappedComponent ref={this.props.forwardedRef} {...this.props} />
				</div>
			);
		}
	};

	return React.forwardRef((props, ref) => {
		return <WithClassPlus {...props} forwardedRef={ref} />;
	});
};

// // Altnernate approach:
// const withClass2 = (WrappedComponent, className) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div className= {className}>
//                    <WrappedComponent ref = {this.props.forwardedRef} {...this.props}/>
//                </div>
//             )
//         }
//     }
// }

const WithClass = props => <div className={props.classes}>{props.children}</div>;
export { withClass };

export default WithClass;
