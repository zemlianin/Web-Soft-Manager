import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Container, Card,

} from 'react-bootstrap';

// function sayAlert() {
//     alert('Hello!');
// }

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


function CardSet(props) {
    return (
        <div onClick={OnClickPack.bind()}>
            <Card style={{ width: '15rem' }} className='cardSet'>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.shortInfo}</Card.Subtitle>
                    <Card.Text>
                        <div className='someText1'>{props.info}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>);
}

export default CardSet;