import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Container, Card,

} from 'react-bootstrap';

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

import AppTheme from './AppTheme';


function AppsList(props) {
    return (
        <Container>
            <h1 className='titleSet'>Программы</h1>

            <div className='listApps'>
                {/* {GetCheckBoxes(arrApp)} */}

                <AppTheme theme={"Браузеры"}
                    arr={[
                        { name: 'Google', id: 1 },
                        { name: 'Gwwgle', id: 2 },
                        { name: 'Gaagle', id: 3 }]}
                />
                <AppTheme theme={"Что-то"}
                    arr={[
                        { name: 'Geegle', id: 4 },
                        { name: 'Guugle', id: 5 }
                    ]} />
                <AppTheme theme={"Чего-то"}
                    arr={[
                        { name: 'Giigle', id: 6 }
                    ]} />

            </div>
        </Container>
    );
}

export default AppsList;