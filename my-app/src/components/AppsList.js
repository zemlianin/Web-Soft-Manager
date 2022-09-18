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
                        { name: 'Yabdex', id: 2 },
                        { name: 'Opera', id: 3 }]}
                />
                <AppTheme theme={"Редакторы кода"}
                    arr={[
                        { name: 'NotePad++', id: 4 },
                        { name: 'NotePad--', id: 5 }
                    ]} />
                <AppTheme theme={"Tools"}
                    arr={[
                        { name: 'Docker', id: 6 }
                    ]} />

            </div>
        </Container>
    );
}

export default AppsList;