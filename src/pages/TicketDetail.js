import React, { useState,  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import emailjs, { send } from 'emailjs-com';

function TicketDetail() {

  const params = useParams();
  const { price, to, from, date, company, seat, hour ,} = params;


  // e mail gönderme fonksiyonu
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_39txd1c', e.target, 'L7whYYprvHUdnw04f')
      .then((result) => {
        console.log(result.text);
        alert("Bilet Detayları Mailinize İletildi.");
      }, (error) => {
        console.log(error.text);
        alert(error.text + "HATA !!!!")
      });
    e.target.reset();
    setShow(false);

  }

 //  butona basıldığında mail modalını açtığımız fonksiyon
  const onMail = (mail) => {

    setShow(true);
  }

  // mail içinde gönderdiğimiz mesajı seyehatin bilgilerini mesaj olarak kaydedip bunu mailde gönderdik
  const [ message,setMessage ] = useState(`Bilet Detayı ${company}  ${price}  ${date} ${from} ${to}`)


  const [show, setShow] = useState(false);
  const [mail, setMail] = useState("cihanc175@gmail.com")
  const handleClose = () => setShow(false);
  return (

    <div className="travel-detail" >
      <div className="travel-bus" >


        <Card style={{ padding: 10 }}>
          <Card.Text>
            <h3> {company} Turizm   </h3>
            <h4>  {from} -- {to} </h4>
          </Card.Text>
          <Card.Img variant="top" src="https://blog.obilet.com/wp-content/uploads/2020/03/G%C3%BCncel-Otob%C3%BCs-G%C3%B6rseli.png" />
          <Card.Body>
            <Card.Text>
              Fiyat:  {price}₺
            </Card.Text>
            <Card.Text>
              Güzargah:   {from} -- {to}
            </Card.Text>
            <Card.Text>
              Saat: {hour}
            </Card.Text>

            <Card.Text>
              Tarih: {date}
            </Card.Text>
            <Card.Text>
              Koltuk Sayısı: {seat==="1"? "30":"40"}
            </Card.Text>
            <button onClick={() => { onMail(mail) }} className="signinbutton">
              Satın Al
            </button>

          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Satın Alma Bilgisi
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form className='xx' onSubmit={sendEmail}>
              <div className="row pt-1 mx-auto">
                <div className="col-8 form-group mx-auto">
                  <input type="text" placeholder="Ad Soyad" name="name" />
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                  <input type="email" hidden value={mail} placeholder="Email Address" name="email" />
                </div>

                <div className="col-8 form-group pt-2 mx-auto">
                  <textarea id="" cols="30" rows="8" hidden value={message} placeholder="Mesajın" name="message"></textarea>
                </div>
                
                <div className="col-8 pt-3 mx-auto">
                  <button type="submit" value="Send Message">Satın Al</button>
                </div>
              </div>
            </form>
          </Modal.Body>

        </Modal>


      </div>





    </div>




  )
}

export default TicketDetail