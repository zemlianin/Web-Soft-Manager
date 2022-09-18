import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Container, Card,

} from 'react-bootstrap';

import CardSet from "./components/Card";
import Header from "./components/Header";

const arrSet = [
  { name: 'Super прогер XL', shortInfo: 'Набор для программистов XL', info: 'Тут есть, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Junior прогер S', shortInfo: 'Набор для начинающих программистов S', info: 'Тут НЕТ!, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Super прогер XL', shortInfo: 'Набор для программистов XL', info: 'Тут есть, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
  { name: 'Junior прогер S', shortInfo: 'Набор для начинающих программистов S', info: 'Тут НЕТ!, что-то настолько важное, установив которое, вы настолько сильно преисполнитесь!' },
];

function OnClickCreateSet() {
    const result = await fetch('http://localhost:5000/get-all-package');
    const apps = await result.json();
    this.setState({ apps });
    console.log(this.setState[0]);
  console.log("Click Create");
  alert(123);
  
}

function OnLoadFunc() {
  alert(987);
}

function App() {
  React.useEffect(() => {
    OnLoadFunc();
  }, []);

  return (
    <div className="">
      <Header />

      <div>
        <Card className="border-white bg-light text-black">
          <Card.Img src="/images/plant.png" alt="Card image" />
          <Card.ImgOverlay>
            <div className='pickDiv'>
              <Card.Title><b>Сделайте установку<br /> ПО проще с нами</b></Card.Title>
              <div className='pickText'>
                <Button className="colorPurp" onClick={OnClickCreateSet.bind()}>Создать пакет ПО</Button>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <Container>
        <h1 className='titleSet'>Пакеты программ</h1>
        <div className='setOfCardSet'>
          {arrSet.map((obj) => (
            <CardSet title={obj.name} shortInfo={obj.shortInfo} info={obj.info} />
          ))}
        </div>
      </Container>

      <div className='footer'>
        <Container>
          <h2>Контакты</h2>
          <div class="row">
            <div class="col">
              Колонка
            </div>
            <div class="col">
              Колонка
            </div>
            <div class="col">
              Колонка
            </div>
          </div>
          <div class="row">
            <div class="col">
              Колонка
            </div>
            <div class="col">
              Колонка
            </div>
            <div class="col">
              Колонка
            </div>
          </div>
        </Container>
      </div>
    </div >
  );
}

export default App;
