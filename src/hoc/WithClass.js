import React from 'react';

const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className= {className}>
            <WrappedComponent {...props}/>
        </div>
    )
}



// Altnernate approach:
const withClass2 = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (

                <div className= {className}>
                   <WrappedComponent {...props}/>
               </div>
            )
        }
    }
}




const WithClass = (props) => (
    <div className = {props.classes}>
       {props.children}
    </div>
);
export {withClass};

export default WithClass;

