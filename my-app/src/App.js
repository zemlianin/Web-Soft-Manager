import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Card,
  Nav,
  Navbar,
  input,
  label,
} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import CardSet from "./components/Card";
import Header from "./components/Header";

import AppList from "./screens/AppList";

const arrSet = [
  { name: 'Super прогер XL', shortInfo: 'Набор для программистов XL', info: 'Тут есть, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Junior прогер S', shortInfo: 'Набор для начинающих программистов S', info: 'Тут НЕТ!, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Super прогер XL', shortInfo: 'Набор для программистов XL', info: 'Тут есть, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Junior прогер S', shortInfo: 'Набор для начинающих программистов S', info: 'Тут НЕТ!, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
];

const arrApp = [
  { name: "Google" },
  { name: "Yandex" },
  { name: "Opera" },
  { name: "Edge" },
]

function OnClickCreateSet2() {
  console.log("Click Create");
  alert(2);
  console.log(fetch('http://APILoad/get-all-package')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          arrSet: result
        });
      }
    ));
}

function OnClickCreateSet() {
  console.log("Click Create");
  // alert(2);

  console.log(fetch('http://APILoad/get-all-package')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          arrSet: result
        });
      }
    ));
}

function OnLoadFunc() {
  // alert(987);
}

// function GetCheckBoxes(props) {
//   let res;
//   props.map((obj) => res+= 
//     <div className="form-check form-switch">
//       <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
//       <label className="form-check-label" for="flexSwitchCheckDefault">{obj.name}</label>
//     </div>)
//   ;
//   return res;
// }

function App() {
  React.useEffect(() => {
    OnLoadFunc();
  }, []);

  return (
    <div className="">
      {/* <Header /> */}
      <header className="">
        <Navbar bg="white" variant="white">
          <Container>
            <Navbar.Brand href="/">AutoSoft</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="/applist">Создать пакет ПО</Nav.Link> */}
              {/* <Nav.Link href="#features">Mac</Nav.Link>
                <Nav.Link href="#pricing">IOS</Nav.Link> */}

            </Nav>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Container>
        </Navbar>
      </header>


      <div>
        <Card className="border-white bg-light text-black">
          <Card.Img src="/images/plant.png" alt="Card image" />
          <Card.ImgOverlay>
            <div className='pickDiv'>
              <Card.Title><b>Сделайте установку<br /> ПО проще с нами</b></Card.Title>
              <div className='pickText'>
                <Button className="colorPurp">Создать пакет ПО</Button>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <Container>
        <h1 className='titleSet'>Пакеты программ</h1>
        <div className='setOfCardSet'>
          {arrSet.map((obj) => (
            <CardSet title={obj.name} shortInfo={obj.shortInfo} info={obj.info} onClick={OnClickCreateSet.bind()} />
          ))}
        </div>
      </Container>

      <Container>
        <h1 className='titleSet'>Программы</h1>

        <div>
          {/* {GetCheckBoxes(arrApp)} */}
          <h4>Браузеры</h4>
          <div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Google</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Yandex</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Opera</label>
            </div>
          </div>
        </div>
      </Container>

      <Card className="border-white bg-light text-black footer overflow-hidden">
        <Card.Img src="/images/Rectangle.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title><b>Контакты</b></Card.Title>
          <div className='pickText'>
            <div class="row">
              <div class="col">
                Тут типа телефон
              </div>
              <div class="col">
                Мы из ВШЭ
              </div>
              <div class="col">
                Зачем я здесь?
              </div>
            </div>
            <div class="row">
              <div class="col">
                +7 977 777 77 77
              </div>
              <div class="col">
                ФКН - крута!
              </div>
              <div class="col">
                Спать или не спать? Вот в чём вопрос...
              </div>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>

    </div >
  );
}

export default App;
