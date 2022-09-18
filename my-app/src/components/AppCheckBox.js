import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Container, Card,

} from 'react-bootstrap';

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

let arrId = [
]



function AppCheckBox(props) {
    const [x, setX] = React.useState(false);

    // const deleteItem = (prId) => {
    //     React.setTodos(todos => todos.filter((id) => id !== prId));
    //   };

    const soldCheckbox = ({ target: { checked } }) => {
        // console.log(x, checked);
        setX(checked);
        if (checked) {
            arrId.push(props.id);
        } else {
            arrId = arrId.filter((id) => id !== props.id);
        }
        console.log(arrId);
    };

    return (
        <div className="form-check form-switch">
            <input checked={x} onChange={soldCheckbox} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.name}</label>
        </div>
    );
}

export default AppCheckBox;