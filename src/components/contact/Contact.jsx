import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import emailjs from "@emailjs/browser";
import { TextareaAutosize } from "@mui/material";

const Contact = () => {
  const [showEmailSend, setShowEmailSend] = useState(false);
  const handleCloseEmailSend = () => setShowEmailSend(false);
  const handleShowEmailSend = () => setShowEmailSend(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAILJS,
        import.meta.env.VITE_TEMPLATE_EMAILJS,
        form.current,
        import.meta.env.VITE_FORM_CURRENT
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact-main-container animate__animated animate__fadeIn">
        <article className="main-contact">
          <section className="contact-img"></section>
          <section className="contact-container">
            <h1 className="text-light">CONTACTO</h1>
            <Form ref={form} onSubmit={sendEmail} className="contact-form">
              <Form.Group className="mb-1">
                <Form.Label className="text-light">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group className="mb-1">
                <Form.Label className="text-light">
                  En que te podemos ayudar
                </Form.Label>
                <Form.Control as={TextareaAutosize} name="message" />
              </Form.Group>
              <Button
                onClick={handleShowEmailSend}
                className="btn btn-warning mt-2"
                type="submit"
                value="Send"
              >
                Enviar
              </Button>
              <Modal show={showEmailSend} onHide={handleCloseEmailSend}>
                <Modal.Header closeButton>
                  <Modal.Body>
                    Correo Enviado! 🛸 <br /> Te responderemos de inmediato.
                    Gracias
                  </Modal.Body>
                </Modal.Header>
              </Modal>
            </Form>
          </section>
        </article>
        <article className="map-section">
          <section className="info-map">
            Pizzeria Fina Pizza,
            <br />
            Los Aliaga 809, Ñuñoa.
            <br />
            Santiago de Chile,
            <br />
            <span>@finapizzachile</span>
          </section>
          <div className="map-wrap">
            <MapContainer center={[-33.457614, -70.5745019]} zoom={16}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-33.457614, -70.5745019]}>
                <Popup>Fina Pizza</Popup>
              </Marker>
            </MapContainer>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contact;
