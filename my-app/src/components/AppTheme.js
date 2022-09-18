import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Container, Card,

} from 'react-bootstrap';

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

import AppCheckBox from './AppCheckBox';

function AppTheme(props) {
    return (
        <div className='listApps'>
            {/* {GetCheckBoxes(arrApp)} */}
            <div className='listApps2'>
                <h4>{props.theme}</h4>
                <div>
                    {props.arr.map((obj) => (
                        <AppCheckBox name={obj.name} id={obj.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AppTheme;