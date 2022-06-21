import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from "react-router-dom";
function Ticket() {
    let navigate = useNavigate();
    const Home = () => {
        
        navigate("/");
      };
  return (
    <div className="ticket-screen-div">
      <button className="ticket-screen-back-btn" onClick={() => Home()}>
           Geri
      </button>
   
      

     
      <Card>
      <Card.Header as="h5">300₺</Card.Header>
      <Card.Body>
        <Card.Title>13:00-20.00</Card.Title>
        <Card.Text>
         ANKARA-İSTANBUL
        </Card.Text>
        {/* <Card.Text>
        Metro Turizm
        </Card.Text> */}
        <Button style={{backgroundColor:"red"}} variant="primary">Otobüsü Görüntüle</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">300₺</Card.Header>
      <Card.Body>
        <Card.Title>13:00-20.00</Card.Title>
        <Card.Text>
         ANKARA-İSTANBUL
        </Card.Text>
        {/* <Card.Text>
        Metro Turizm
        </Card.Text> */}
        <Button style={{backgroundColor:"red"}} variant="primary">Otobüsü Görüntüle</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Header as="h5">300₺</Card.Header>
      <Card.Body>
        <Card.Title>13:00-20.00</Card.Title>
        <Card.Text>
         ANKARA-İSTANBUL
        </Card.Text>
        {/* <Card.Text>
        Metro Turizm
        </Card.Text> */}
        <Button style={{backgroundColor:"red"}} variant="primary">Otobüsü Görüntüle</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Ticket