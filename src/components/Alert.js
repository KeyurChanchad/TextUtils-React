import React from 'react';

const Alert = (props) => {
    const capitalize = (word)=>{
        let charFirst = word.charAt(0).toUpperCase();
        return charFirst + word.substr(1);
    }
    return (
        <div className="container-fluid" style={{height : '50px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
        </div> }
        </div>
        // if props.alert is null then it return false and return blank (&&) condition 
    );
}

export default Alert;
