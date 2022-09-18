import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Container, Card,

} from 'react-bootstrap';

import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

function OnClickPack() {
    console.log("Click Pack");
    alert(456);
    // fetch("https://localhost:44301/api/Employee")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           employees: result
    //         });
    //       }
    //     );
}

function routeChange(str) {
    //alert(0);
    window.location.href="http://localhost:5010/"
}

function CardSet(props) {
    return (
        <div onClick={routeChange.bind('http://localhost:5010/')} >
            {/* <a href={'http://localhost:5010/'}> */}
            <div >
                <Card style={{ width: '15rem' }} className='cardSet' href={'http://localhost:5010/'}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.shortInfo}</Card.Subtitle>
                        <Card.Text>
                            <div className='someText1'>{props.info}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
}

export default CardSet;